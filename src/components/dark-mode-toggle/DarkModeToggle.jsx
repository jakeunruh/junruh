import { useDarkMode } from "../../hooks/use-dark-mode.js";
import Mode from "../../assets/img/mode.svg";
import "../../styles/toggle.scss"

const DarkModeToggle = () => {
  const theme = useDarkMode(); 
  return (
    <button onClick={theme} className="nav__mode-toggler btn" aria-label="color mode"><img src={Mode} alt="" /></button>
  )
}

export default DarkModeToggle
 