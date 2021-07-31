import React, { useState } from "react";
import "./styles/style.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Search from "./components/Search.js";
import Results from "./components/Results.js";


function App() {

// STATE
  const [resultsClass, setResultsClass] = useState("show-results");
  const [range, setRange] = useState("");
  const [results, setResults] = useState({});

// FUNCTIONS 
// 1. set to search by either state or city, set state to selected means.
  const handleRange = () => {

  }
// 2. handle user input to finish query string with requested search location
  const handleInput = async () => {

  }

  return (
    <div className="App">
      <nav className="nav">
        <div className="logo">
          <h1>brewery finder</h1>
        </div>
        <div className="nav-links">
          <a href="https://github.com/nicoleww" target="_blank"><img src={github} /></a>
          <a href="https://www.linkedin.com/in/nicolewitherall" target="_blank"><img src={linkedin} /></a>
        </div>
      </nav>
      <Search />
      <Results resultsClass={resultsClass} />
    </div>
  );
}

export default App;
