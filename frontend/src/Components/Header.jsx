const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-emerald-50">
        <div class="container-fluid">
          <a class="navbar-brand temp text-primary fs-2 fw-bold" href="/">Task Manager</a>
            <form class="d-flex justify-content-end" role="search">
              <input class="form-control me-2 fw-bold" type="search" placeholder="Search" aria-label="Search" />
              <button type="button" class="btn btn-outline-primary w-40 me-2"><a href="/signin">Sign-in</a></button>
              <button type="button" class="btn btn-outline-primary w-40 me-2"><a href="/Login">Log-in</a></button>
            </form>
        </div>
      </nav>
    </div>
  )
}

export default Header;