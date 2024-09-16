import './header.scss'
const Header = () => {
  return (
    <div>
        <nav className="header">
            <div className="header__logo">
                <h1>TASK MANAGER</h1>
            </div>
            <div className="header__buttons">
                <button>Sign-in</button>
                <button>Sign-out</button>
            </div>
        </nav>
    </div>
  )
}

export default Header