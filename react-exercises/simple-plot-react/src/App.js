import React from "react";
import "./App.css";
import Bar from "./components/Bar/Bar";
import Line from "./components/Line/Line";

function App() {
  // const data = [
  //   { X: 1, Y: 12 },
  //   { X: 2, Y: 28 },
  //   { X: 3, Y: 18 },
  //   { X: 4, Y: 34 },
  //   { X: 5, Y: 40 },
  //   { X: 6, Y: 80 },
  //   { X: 7, Y: 80 },
  // ];

  const data = [
    { X: 'Aus', Y: 12 },
    { X: 'Ind', Y: 28 },
    { X: 'Pak', Y: 18 },
    { X: 'China', Y: 34 },
    { X: 'Jap', Y: 40 },
    { X: 'USA', Y: 80 },
    { X: 'UK', Y: 80 },
  ];
  return (
    <div className="App">
      <h1>Working</h1>
      <Line data={data} lineGap={100} />
      <Bar />
    </div>
  );
}

export default App;
