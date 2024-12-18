import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="birthday-container">
        <h1 className="pulsate">🎉 Happy Birthday, Channaveer! 🎂</h1>
        <p className="fade-in">
          Happy Birthday to the ultimate bug hunter! 🐛🎯 May your cake have no
          layers of issues, your candles burn without crashes, and your day be
          100% bug-free (unlike your test cases)! 🎉🎂 😀😀😀😀😀😀😀
        </p>
        <div className="balloon-container">
          <div className="balloon red"></div>
          <div className="balloon blue"></div>
          <div className="balloon yellow"></div>
          <div className="balloon green"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
