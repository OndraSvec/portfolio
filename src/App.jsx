import { useState } from "react";
import Wrapper from "./components/Wrapper";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);
  return (
    <>
      <Wrapper darkMode={darkMode}></Wrapper>
    </>
  );
}

export default App;
