import Header from "./components/header/Header";
// import Intro from "./components/intro/Intro";
import Main from "./components/main/Main";
import DarkModeToggle from "./components/dark-mode-toggle/DarkModeToggle";

const App = () => {

  return (
    // if dark mode is true add class of dark, if not, remove dark class
    <>
      <Header />
      {/* <Intro /> */}
      <Main />
      <DarkModeToggle />
    </>
  );
};

export default App;