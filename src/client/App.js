import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import DisplayCards from "./components/DisplayCards";
import All from "./components/All";
import About from "./components/About";

const App = props => {
  return (
    <div className="home">
      <Navbar />
      <DisplayCards />
      <All react-router={props.history} />
      <About />
    </div>
  );
};

export default App;
