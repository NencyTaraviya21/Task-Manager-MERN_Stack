// import { Link } from 'react-router-dom';
// const Header = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-emerald-50">
//         <div class="container-fluid">
//           <Link class="navbar-brand temp text-primary fs-2 fw-bold" to="/">Task Manager</Link>
//             <form class="d-flex justify-content-end" role="search">
//               <input class="form-control me-2 fw-bold" type="search" placeholder="Search" aria-label="Search" />
//               <button type="button" class="btn btn-outline-primary w-40 me-2"><Link to="/signin">Sign-in</Link></button>
//               <button type="button" class="btn btn-outline-primary w-40 me-2"><Link to="/signup">Sign-up</Link></button>
//             </form>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header;


import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-emerald-50 h-24">
          <div className="container-fluid">
            <Link className="  text-primary fs-2 fw-bold  ms-7" to="/">Task Manager</Link>
            <form className="d-flex justify-content-end" role="search">
              {/* <input className="form-control me-2 fw-bold" type="search" placeholder="Search" aria-label="Search" /> */}
              {/* <Link to="/tasks">
                <button type="button" className="btn btn-outline-primary w-40 me-2">Tasks</button>
              </Link> */}
              <Link to="/signin">
                <button type="button" className="btn btn-outline-primary w-40 me-2 h-11 text-lg">Sign-in</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-outline-primary w-40 me-2 h-11 text-lg">Sign-up</button>
              </Link>
            </form>
          </div>
        </nav>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
