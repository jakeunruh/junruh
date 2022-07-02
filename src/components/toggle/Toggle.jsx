import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./toggle.css"

const Toggle = () => {
  const theme = useContext(ThemeContext) 
  const handleClick = ()=> {
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className="toggle">
      <span className="d">D</span>
      <span className="l">L</span>
      <div className="toggle-button" onClick={handleClick}></div>
    </div>
  )
}

export default Toggle
 