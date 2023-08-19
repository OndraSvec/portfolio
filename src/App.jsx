import { useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);
  return (
    <>
      <Wrapper darkMode={darkMode}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Wrapper>
    </>
  );
}

export default App;
