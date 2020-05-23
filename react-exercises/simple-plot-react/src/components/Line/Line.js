import React, { useRef, useEffect } from "react";
import {
    getMaxYAxisValue,
    drawAxis,
    drawGrid
} from "../../utils/Line.utils";

const Line = ({ data, lineGap, linePlotProps = {} }) => {
    if (!Array.isArray(data)) {
        throw new TypeError(`Expected an array, got ${typeof data}`);
    } else if (lineGap && typeof lineGap !== 'number') {
        throw new TypeError(`Expected a number, got ${typeof data}`);
    }
    const linePlot = useRef(null);

    const xAxisLineSize = 30;
    const yAxisLineSize = 30;
    const maxYAxisValue = getMaxYAxisValue(data);
    const lineGapValue = lineGap || 10;

    const addYAxisSize = (value, ctx) => {
        return (
            ctx.canvas.height -
            ((ctx.canvas.height - yAxisLineSize) / maxYAxisValue) * value -
            yAxisLineSize
        );
    };

    const addXAxisText = (ctx) => {
        let xPlot = lineGapValue;
        for (let item of data) {
            ctx.fillText(
                item.X,
                xPlot,
                ctx.canvas.height - yAxisLineSize + 20
            );
            xPlot += lineGapValue;
        }
    };

    const addYAxisText = (ctx) => {
        for (let i = 0; i < maxYAxisValue; i += 10) {
            ctx.fillText(i, xAxisLineSize - 20, addYAxisSize(i, ctx));
        }
    };

    const drawLine = (ctx) => {
        let xPlot = lineGapValue;
        ctx.beginPath();
        ctx.strokeStyle = linePlotProps.lineColor || "red";
        ctx.moveTo(xPlot, addYAxisSize(data[0].Y, ctx));
        for (let item of data) {
            ctx.lineTo(xPlot, addYAxisSize(item.Y, ctx));
            xPlot += lineGapValue;
        }
        ctx.stroke();
    };

    const drawDots = (ctx) => {
        let xPlot = lineGapValue;
        ctx.fillStyle = linePlotProps.dotsColor || "black";
        for (let item of data) {
            ctx.beginPath();
            ctx.arc(
                xPlot,
                addYAxisSize(item.Y, ctx),
                8,
                0,
                Math.PI * 2,
                true
            );
            ctx.fill();
            xPlot += lineGapValue;
        }
    };

    const updateCanvas = (ctx) => {
        ctx.lineWidth = 4;
        addXAxisText(ctx);
        addYAxisText(ctx);
        drawLine(ctx);
        drawDots(ctx);
    };

    const drawLinePlot = () => {
        const ctx = linePlot.current.getContext("2d");
        if (Object.prototype.toString.call(ctx) !== '[object CanvasRenderingContext2D]') {
            throw new TypeError(`Expected a canvas element, got ${typeof ctx}`);
        }
        //drawGrid(ctx);
        drawAxis(ctx, xAxisLineSize, yAxisLineSize);
        updateCanvas(ctx);
    };

    useEffect(() => {
        drawLinePlot();
    });

    return (
        <React.Fragment>
            <canvas ref={linePlot} width={linePlotProps.width} height={linePlotProps.height}></canvas>
        </React.Fragment>
    );
};

export default Line;
