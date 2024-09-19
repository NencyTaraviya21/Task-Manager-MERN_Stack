import React from 'react'
import'./Sign.css'

const Signin = () => {
  return (
    <>
      <div class="">
        <div class="card-header myheader lato-black">
          Sign-in
        </div>
        <div class="card-body flex flex-col justify-center ">
        <input class="form-control  w-25 align-middle " type="search" placeholder="Enter your name" aria-label="Search" />
        <input class="form-control  w-25  " type="search" placeholder="Enter your email" aria-label="Search" />
        <input class="form-control  w-25  " type="search" placeholder="Enter your password" aria-label="Search" />
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Sign-in</a>
        </div>
        <div class="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>
    </>
  )
}

export default Signin