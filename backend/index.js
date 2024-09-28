import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import Task from './Models/taskModel.js';
import User from './Models/userModel.js';

dotenv.config(); 

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const mongoDBURL = process.env.connStr;

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Database Connected Successfully.");

        //Routes here!!
        app.get('/',(req,res) => {
            console.log(User);  // This should log the User model definition
            console.log(typeof User.create);  // This should log 'function'
            res.send("Hello...")
        })

        app.post('/signup', async(req, res) => {
            console.log(req.body);
            try {
                if(!req.body.name || !req.body.email || !req.body.password){
                   return res.status(400).json({message : "Please enter all required fields."}); //unable to process the request
                }
                const newUser = {
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password
                };

                const user = await User.create(newUser);
                return res.status(201).json(user); // http request was successful

            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message }); //internal server error
            }
        });

        app.use('/signin',async(req,res)=>{
            
            console.log(req.body);

            try{
                if(!req.body.name || !req.body.password){
                    res.status(400).json({message : "Please enter all required fields."});
                }

                const user = await User.findOne({name:req.body.name});

                // console.log(user);

                if(user){
                    res.status(200).json({message:"User found!!"})
                }
                else{
                    res.status(404).json({message:"User not found!!"});
                }
            }
            catch(error){
                console.log(error.message);
                res.status(500).json({ message: error.message });
            }

        })

        app.get('/tasks',async(req,res)=>{
            const result = await Task.find();
            res.status(200).send(result);
        })

        app.listen(process.env.PORT, () => {
            console.log("Server Started Successfully.");
        });

    })
