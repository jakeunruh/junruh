import "../../styles/header.scss"
import { useScrollDirection } from "../../hooks/use-scroll-direction"

function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <header className={`header ${ scrollDirection === 'down' ? 'header--hide' : 'header--show'}`}>
      <h1 className="header__title">
        <span className="header__span--vertical">Jake</span>Unruh 
      </h1>
    </header>
  )
}

export default Header
