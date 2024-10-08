import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Signin = () => {

  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
      const data = await axios.post('http://localhost:3000/signin',{
        name,password
      });
      console.log(data.status);
      
      if(data.status === 200){ 
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signin Successfully.",
            showConfirmButton: true,
          }).then(()=>{
            navigate('/tasks');  
          });   
      }
      else if(data.status === 500 || data.status === 404){
        Swal.fire({
          position: "center",
          icon:"error",
          title: "Signin Failed.",
          showConfirmButton: true,
        })
      }
    }
    catch(e){
      console.log(e);
    }

  };

  return (
    <div className='d-flex justify-content-center'>
      <div className="card text-center mt-5 w-50">
        <div className="card-header myHeader lato-black bg-blue-500 text-2xl text-zinc-50">
         Sign-in
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center">
            <input
              className="form-control me-2 ms-5 w-50 text-center mt-3"
              type="text"
              placeholder="Enter Username"
              value={name}
              onChange={(e) => setname(e.target.value)}
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
            <button type="submit" className="btn bg-blue-500 hover:bg-blue-400 my-4 w-40">Sign-in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
