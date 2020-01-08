import React, { Component } from "react";

import "./department.css";

class Department extends Component {
  render() {
    return (
      <div
        className="department-container"
        style={{
          background: "url(../../../src/images/fire.jpg)",
          backgroundSize: "cover",
          color: "white"
        }}
      >
        <header>
          <h1>This is Fire Department</h1>
        </header>
        <main>
          <section>
            <h2>*111*1#</h2>
            <div className="department-content">
              <h3>What to do incase of fire</h3>

              <ul>
                <li>Get the fire extinguisher</li>
                <li>Raise an Alarm</li>
                <li>Call 111</li>
                <li>Find the best possible exit route</li>
                <li>Ifyour clothes catch fire, stop drop and roll</li>
              </ul>
            </div>
          </section>
        </main>
        <footer>
          <h3>Incase of fire, text 'FIRE' and your location to *111*1#</h3>
        </footer>
      </div>
    );
  }
}

export default Department;
