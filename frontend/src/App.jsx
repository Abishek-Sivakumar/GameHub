import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import AddGame from "./Components/AddGame/AddGame";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const current_theme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addgame" element={<AddGame />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
