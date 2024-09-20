import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className="card text-center mt-5 w-50">
        <div className="card-header myHeader lato-black bg-blue-500 text-2xl text-zinc-50">
         Log-in
        </div>
        <div className="card-body d-flex flex-column align-items-center ">
          <input className="form-control me-2 ms-5 w-50 text-center  mt-3" type="search" placeholder="Enter Username" aria-label="Search" />
          <input className="form-control me-2 ms-5 w-50 text-center mt-3" type="password" placeholder="Enter Password" aria-label="Search" />
          <button className=""><a href="#" className="btn bg-blue-500 hover:bg-blue-400 my-4 w-40" >Log-in</a></button>
        </div>
      </div>
    </div>
  )
}

export default Login