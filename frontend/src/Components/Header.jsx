import './Header.css'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand temp" href="#">Task Manager</a>
          
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-primary me-2" type="submit" >SignUp</button>
              <button class="btn btn-outline-primary " type="submit">SignIn</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header