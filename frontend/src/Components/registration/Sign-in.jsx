import React from 'react'
import './App.css'; 

const Signin = () => {
  return (
    <div>
        <div className='Signin-from'>
            <div className='forms'>
                <input type='text' placeholder='Enter your name' required/>
                <input type='email' name='enter email' required/>
                <input type='password' name='enter password' required/>
                <button>Sign-in</button>
            </div>
        </div>
    </div>
  )
}

export default Signin