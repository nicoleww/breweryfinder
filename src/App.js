import React, { useState } from "react";
import "./styles/style.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Search from "./components/Search.js";
import Results from "./components/Results.js";


function App() {

// STATE
  const [resultsClass, setResultsClass] = useState("hide-results");
  const [range, setRange] = useState();
  const [searchBarClass, setSearchBarClass] = useState("waiting-for-range");
  const [userInput, setUserInput] = useState();
  const [results, setResults] = useState(["hi"]);

// FUNCTIONS 
// 1. set to search by either state or city, set state to selected means.
  const handleRange = (clicked) => {
    setRange(clicked);
    setSearchBarClass("search-bar");
  }

// 2. handle and capture user inputted location to state
  const handleUserInput = (e) => {
    let input = e.target.value.toLowerCase().split(" ").join("_");
    setUserInput(input);
  }

// 3. handle form submission to finish query string with requested search location
  const handleSearch = async (e) => {
    e.preventDefault();
    let response = await fetch(`https://api.openbrewerydb.org/breweries?by_${range}=${userInput}&per_page=50`);
    let results = await response.json();
    setResultsClass("show-results");
    setResults(results);
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
      <div className="content">
      <Search handleRange={handleRange} searchBarClass={searchBarClass} handleUserInput={handleUserInput} handleSearch={handleSearch} />
      <Results resultsClass={resultsClass} results={results} />
      </div>
    </div>
  );
}

export default App;
