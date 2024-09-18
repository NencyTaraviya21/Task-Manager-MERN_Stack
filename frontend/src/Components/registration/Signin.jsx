import React from 'react'
import'./Sign.css'

const Signin = () => {
  return (
    <>
      <div class="card text-center mt-5">
        <div class="card-header myheader lato-black">
          Sign-in
        </div>
        <div class="card-body ">
        <input class="form-control me-2 ms-5 w-25" type="search" placeholder="Enter your name" aria-label="Search" />
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>
    </>
  )
}

export default Signin