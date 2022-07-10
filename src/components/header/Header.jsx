import "../../styles/header.scss"
import { useScrollDirection } from "../../hooks/use-scroll-direction"

function Header() {
  // renaming the return of useScrollDirection to use in the header to set the class
  const scrollDirection = useScrollDirection();
  return (
    <header className={`header ${ scrollDirection === 'down' ? 'header--hide' : 'header--show'}`}>
      <h1 className="header__title">
        <span className="header__span--vertical">Jake</span>Unruh 
      </h1>
      <nav className="nav" aria-label="Main Navigation"></nav>
      <button aria-label="Navigation Menu" aria-expanded="false" className="header__hamburder-toggler">
        <div className="header__hamburder-icon"></div>
      </button>
    </header>
  )
}

export default Header
