import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import DisplayCards from "./components/DisplayCards";
import All from "./components/All";

const App = () => (
  <div>
    <Navbar />
    <DisplayCards />
    <All />
  </div>
);
export default App;
