import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import Contact from "./Contact"
import Projects from "./Projects"
import About from "./About"
import Footer from "./Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false)

const changeDarkMode = () => {
  setDarkMode(prevState => !prevState)

}
  return (
    <div className={darkMode ? "DarkMode" : "App"}>
     <NavBar changeDarkMode={changeDarkMode} darkMode={darkMode} />
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;