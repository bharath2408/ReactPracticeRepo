// import axios from "axios";
import React from "react";
import "./App.css";
// import GridContainer from "./components/GridContainer";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
