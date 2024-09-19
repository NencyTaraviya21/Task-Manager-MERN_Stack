import React from 'react'

const Signin = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className="card text-center mt-5 w-50">
        <div className="card-header myHeader lato-black bg-purple-500 text-2xl text-zinc-50">
          Sign-in
        </div>
        <div className="card-body d-flex flex-column align-items-center ">
          <input className="form-control me-2 ms-5 w-50 text-center" type="search" placeholder="Enter Username" aria-label="Search" />
          <input className="form-control me-2 ms-5 w-50 text-center mt-3" type="search" placeholder="Enter Password" aria-label="Search" />
          <a href="#" className="btn bg-purple-500">Go somewhere</a>
        </div>
        <div className="card-footer text-body-secondary">
          2 days ago
        </div>  
      </div>
    </div>
  )
}

export default Signin