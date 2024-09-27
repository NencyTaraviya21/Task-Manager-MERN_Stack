import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('');
  const navigate = useNavigate(); 
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
      const data = await axios.post('http://localhost:3000/signup',{
        name, email,password
      });
      console.log(data);
    }
    catch(e){
      console.log(e);
    }

  };
   
    
  return (
    <div className='d-flex justify-content-center'>
      <div className="card text-center mt-5 w-50">
        <div className="card-header myHeader lato-black bg-blue-500 text-2xl text-zinc-50">
         Sign-up
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <form onSubmit={handleSubmit} id='data' className="w-100 d-flex flex-column align-items-center"  method='post'>
            <input
              className="form-control me-2 ms-5 w-50 text-center mt-3"
              type="text"
              placeholder="Enter Username"
              value = {name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="form-control me-2 ms-5 w-50 text-center mt-3"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="form-control me-2 ms-5 w-50 text-center mt-3"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn bg-blue-500 hover:bg-blue-400 my-4 w-40">Sign-up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
