// import './Header.css'

// const Header = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <a class="navbar-brand temp" href="#">Task Manager</a>
          
//           <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
//             <form class="d-flex" role="search">
//               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button class="btn btn-outline-primary me-2" type="submit" >SignUp</button>
//               <button class="btn btn-outline-primary " type="submit">SignIn</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header

const Header = () => {
  return (
    <div className="bg-body-tertiary">
      <nav className="navbar navbar-expand-lg container mx-auto">
        <div className="flex justify-between w-full">
          <a className="navbar-brand text-lg font-bold" href="#">Task Manager</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-end" id="navbarSupportedContent">
            <form className="flex items-center space-x-4">
              <input className="form-control rounded-md shadow-sm px-3 py-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">SignUp</button>
              <button className="btn btn-outline-primary" type="submit">SignIn</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
