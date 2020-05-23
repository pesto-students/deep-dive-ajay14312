import React from "react";
import "./App.css";
import Bar from "./components/Bar/Bar";
import Line from "./components/Line/Line";

function App() {
  const data = [
    { X: 'India', Y: 135.26 },
    { X: 'Australia', Y: 2.5 },
    { X: 'Japan', Y: 12.65 },
    { X: 'China', Y: 140 },
    { X: 'Korea', Y: 5.16 },
    { X: 'USA', Y: 32.82 },
    { X: 'UK', Y: 6.66 },
  ];
  const linePlotProps = {
    width: 1000,
    height: 600,
    lineColor: 'green',
    dotsColor: 'yellow'
  }
  return (
    <div className="App">
      <h1>Simple Plot React</h1>
      <h2>Population in crores by Country</h2>
      <Line data={data} lineGap={100} linePlotProps={linePlotProps} />
      <Bar />
    </div>
  );
}

export default App;
