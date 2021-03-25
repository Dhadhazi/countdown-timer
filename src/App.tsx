import React from "react";
import "./App.css";

function App() {
  return (
    <div className="outerContainer">
      <div
        className="mainContainer"
        style={{ backgroundImage: `url("./images/bg-stars.svg")` }}
      >
        <div>WE ARE LAUNCHING SOON</div>
        <div>TIMERSTUFF</div>
        <div>Social icons</div>
        <div className="hills">
          <img src="./images/pattern-hills.svg" alt="Hills in the background" />
        </div>
      </div>
    </div>
  );
}

export default App;
