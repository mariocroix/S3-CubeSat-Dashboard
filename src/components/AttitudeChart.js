import React, { useState, useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { generateRandomAttitude } from "../utils/dataGenerator";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const AttitudeChart = () => {
    const [data, setData] = useState([]);
    const [latestValue, setLatestValue] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prevData) => {
                const newPoint = generateRandomAttitude();
                setLatestValue(newPoint);
                return [...prevData.slice(-4), newPoint];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const chartData = {
        datasets: [
            {
                label: "Attitude (X, Y)",
                data: data.slice(0, -1),
                backgroundColor: "rgba(255,183,1, 0.2)",
                borderColor: "rgb(255,183,1, 1)",
            },
            {
                label: "Latest Point",
                data: [data[data.length - 1]],
                backgroundColor: "rgba(252,133,0, 0.2)",
                borderColor: "rgba(252,133,0, 1)",
                pointRadius: 8,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                title: {
                    display: true,
                    text: "Attitude X (degrees)",
                },
                min: -5,
                max: 5,
            },
            y: {
                title: {
                    display: true,
                    text: "Attitude Y (degrees)",
                },
                min: -5,
                max: 5,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const { x, y } = context.raw;
                        return `X: ${x}, Y: ${y}`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <Scatter data={chartData} options={options} />
            <div className="latest-value">
                <strong>X:</strong> {latestValue.x} &nbsp;|&nbsp;
                <strong>Y:</strong> {latestValue.y}
            </div>
        </div>
    );
};

export default AttitudeChart;
