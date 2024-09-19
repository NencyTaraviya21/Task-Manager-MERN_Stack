const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-emerald-50">
        <div class="container-fluid">
          <a class="navbar-brand temp text-primary fs-2 fw-bold" href="/">Task Manager</a>
            <form class="d-flex justify-content-end" role="search">
              <input class="form-control me-2 fw-bold" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-primary me-2 fw-bold" type="submit" > <a href="/signup"> SignUp </a></button>
              <button class="btn btn-outline-primary fw-bold " type="submit"><a href="/signin"> SignIn </a></button>
            </form>
        </div>
      </nav>
    </div>
  )
}

export default Header;