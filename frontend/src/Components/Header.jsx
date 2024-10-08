
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Header = () => {
  const [showButtons, setShowButtons] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/tasks') {
      setShowButtons(false); 
    } else {
      setShowButtons(true);   
    }
  }, [location.pathname]);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-emerald-50 h-24">
          <div className="container-fluid">
            <Link className="text-primary fs-2 fw-bold ms-7" to="/">Task Manager</Link>
            <form className="d-flex justify-content-end" role="search">
              {showButtons && (
                <>
                  <Link to="/signin">
                    <button type="button" className="btn btn-outline-primary w-40 me-2 h-11 text-lg">Sign-in</button>
                  </Link>
                  <Link to="/signup">
                    <button type="button" className="btn btn-outline-primary w-40 me-2 h-11 text-lg">Sign-up</button>
                  </Link>
                </>
              )}
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

