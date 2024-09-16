import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import Task from './Models/taskModel.js';
import User from './Models/userModel.js';

dotenv.config();

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

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

        app.post('/user', async(req, res) => {

            try {
                if(!req.body.name || !req.body.email || !req.body.password){
                   return res.status(400).json({message : "Please enter all required fields."});
                }
                const newUser = {
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password
                };

                const user = await User.create(newUser);
                return res.status(201).json(user);

            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message });
            }
        });

        app.listen(process.env.PORT, () => {
            console.log("Server Started Successfully.");
        });

    })
