import React, { useRef, useEffect } from "react";

const Bar = () => {
  const barPlot = useRef(null);

  const createCanvas = () => {
    const ctx = barPlot.current.getContext("2d");

    const data = [100, 45, 90, 85, 72, 88];
    const width = 50;
    let currX = 50;
    ctx.fillStyle = "green";

    for (let i = 0; i < data.length; i++) {
      const height = data[i];
      ctx.fillRect(currX, ctx.canvas.height - height, width, height);
      currX += width + 10;
    }
  };

  useEffect(() => {
    createCanvas();
  });

  return (
    <React.Fragment>
      <canvas ref={barPlot} width={500} height={500}></canvas>
    </React.Fragment>
  );
};

export default Bar;
