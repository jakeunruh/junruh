import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

const App = () => {

  return (
    <>
      <div className="top">
        <Header />
        <Nav />
      </div>
      <Main />
    </>
  );
};

export default App;