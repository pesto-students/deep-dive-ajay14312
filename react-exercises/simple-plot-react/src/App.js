import React from "react";
import "./App.css";
import Bar from "./components/Bar/Bar";
import Line from "./components/Line/Line";

function App() {
  const data = [
    { X: 'India', Y: 130 },
    { X: 'Australia', Y: 28 },
    { X: 'Japan', Y: 18 },
    { X: 'China', Y: 34 },
    { X: 'Korea', Y: 40 },
    { X: 'USA', Y: 35 },
    { X: 'UK', Y: 80 },
  ];
  return (
    <div className="App">
      <h1>Simple Plot React</h1>
      <Line data={data} lineGap={100} />
      <Bar />
    </div>
  );
}

export default App;
