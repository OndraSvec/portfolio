import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);
  return (
    <>
      <Wrapper darkMode={darkMode}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <About />
      </Wrapper>
    </>
  );
}

export default App;
