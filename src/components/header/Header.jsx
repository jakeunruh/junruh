import "./header.scss"
import Logo from "../../img/logo.svg"

function Header() {
  return (
    <header>
        <div className="img">
            <img src={Logo} alt="" className="logo" />
        </div>
    </header>
  )
}

export default Header
