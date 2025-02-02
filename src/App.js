import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="birthday-container">
        <h1 className="pulsate">🎉 Happy Birthday, Wahid 🎂</h1>
        <p className="fade-in">Happy Birthday, Wahid!🎉 </p>
        <p>
          Wishing you a day full of joy and all the best things in life. So
          proud of you, little bro! Enjoy your special day! Love you! 🎉🎂
          😀😀😀😀😀😀😀
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
