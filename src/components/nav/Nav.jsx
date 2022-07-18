import "../../styles/nav.scss";
import DarkModeToggle from "../dark-mode-toggle/DarkModeToggle";

function Nav() {
  return (
    <nav className="nav" aria-label="main navigation">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="/">About</a>
          </li>
          <li className="nav__list-item">
            <a href="/">Work</a>
          </li>
          <li className="nav__list-item">
            <a className="btn" href="/">Resume</a>
          </li>
        </ul>
        <button className="nav__menu-toggler" aria-label="navigation menu" aria-expanded="false">
            <div className="nav__menu-icon"></div>
        </button>
        <DarkModeToggle />
    </nav>
  )
}

export default Nav
