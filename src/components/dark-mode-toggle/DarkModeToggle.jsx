import { useDarkMode } from "../../hooks/use-dark-mode.js"
import "../../styles/toggle.scss"

const DarkModeToggle = () => {
  const theme = useDarkMode(); 
  return (
    <div className="toggle">
      <span className="d">D</span>
      <span className="l">L</span>
      <div className="toggle-button" onClick={theme}></div>
    </div>
  )
}

export default DarkModeToggle
 