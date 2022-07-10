import "../../styles/header.scss"
import { useScrollDirection } from "../../hooks/use-scroll-direction"
import Logo from "../../img/logo.svg"

function Header() {
  // renaming the return of useScrollDirection to use in the header to set the class
  const scrollDirection = useScrollDirection();
  return (
    <header className={`${ scrollDirection === 'down' ? 'hide' : 'show'}`}>
        <div className="img">
            <img src={Logo} alt="" className="logo" />
        </div>
        <div className="hamburder-toggler"></div>
        <button aria-label="Navigation Menu" aria-expanded="false" class="hamburder-toggler">
          <div class="hamburder-toggler-icon"></div>
        </button>
        <nav></nav>
    </header>
  )
}

export default Header
