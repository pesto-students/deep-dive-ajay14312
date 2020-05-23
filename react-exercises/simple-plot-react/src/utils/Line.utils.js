const getMaxYAxisValue = (data) => {
    if (!Array.isArray(data)) {
        throw new TypeError(`Expected an array, got ${typeof data}`);
    }
    let max = 0;

    for (let item of data) {
        if (item.Y > max) {
            max = item.Y;
        }
    }

    max += 10 - (max % 10);
    return max;
};

const drawAxis = (ctx, xAxisLineSize, yAxisLineSize) => {
    if (Object.prototype.toString.call(ctx) !== '[object CanvasRenderingContext2D]') {
        throw new TypeError(`Expected a canvas element, got ${typeof ctx}`);
    } else if (typeof xAxisLineSize !== 'number') {
        throw new TypeError(`Expected a number, got ${typeof xAxisLineSize}`)
    } else if (typeof yAxisLineSize !== 'number') {
        throw new TypeError(`Expected a number, got ${typeof yAxisLineSize}`)
    }

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(xAxisLineSize, 0);
    ctx.lineTo(xAxisLineSize, ctx.canvas.height - yAxisLineSize);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height - yAxisLineSize);
    ctx.stroke();
};

const drawGrids = (ctx) => {
    if (Object.prototype.toString.call(ctx) !== '[object CanvasRenderingContext2D]') {
        throw new TypeError(`Expected a canvas element, got ${typeof ctx}`);
    }
    let xGrid = 10;
    let yGrid = 10;
    ctx.beginPath();
    while (xGrid < ctx.canvas.height) {
        ctx.moveTo(0, xGrid);
        ctx.lineTo(ctx.canvas.width, xGrid);
        xGrid += 10;
    }

    while (yGrid < ctx.canvas.width) {
        ctx.moveTo(yGrid, 0);
        ctx.lineTo(yGrid, ctx.canvas.height);
        yGrid += 10;
    }

    ctx.strokeStyle = "gray";
    ctx.stroke();
};

export { getMaxYAxisValue, drawAxis, drawGrids };
