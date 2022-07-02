import Toggle from "./components/toggle/Toggle";
import Intro from "./components/intro/Intro";
import Body from "./components/body/Body"
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className={`wrapper${darkMode ? " dark" : ""}`}>
      <Toggle />
      <Intro />
      <Body />
    </div>
  );
};

export default App;