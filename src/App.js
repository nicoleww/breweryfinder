import React, { useState } from "react";
import "./styles/style.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h1>brewery finder</h1>
        <div className="nav-links">
          <a href="https://github.com/nicoleww"><img src={github} /></a>
          <a href="https://www.linkedin.com/in/nicolewitherall"><img src={linkedin} /></a>
        </div>
      </nav>
    </div>
  );
}

export default App;
