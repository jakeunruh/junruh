import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Body from "./components/body/Body";
import DarkModeToggle from "./components/dark-mode-toggle/DarkModeToggle";

const App = () => {

  return (
    // if dark mode is true add class of dark, if not, remove dark class
    <>
      <Header />
      <DarkModeToggle />
      <Intro />
      <Body />
    </>
  );
};

export default App;