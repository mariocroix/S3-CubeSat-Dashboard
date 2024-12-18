import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { generateRandomMagneticField } from '../utils/dataGenerator';
import { Chart } from 'chart.js';

const MagneticFieldChart = () => {
    const [magneticFieldData, setMagneticFieldData] = useState({
        x: Array(10).fill(0),
        y: Array(10).fill(0),
        z: Array(10).fill(0),
    });

    const [currentValues, setCurrentValues] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const newField = generateRandomMagneticField();
            setMagneticFieldData((prevData) => ({
                x: [...prevData.x.slice(1), newField.x],
                y: [...prevData.y.slice(1), newField.y],
                z: [...prevData.z.slice(1), newField.z],
            }));
            setCurrentValues(newField);
        }, 2000);

        return () => {
            if (Chart.getChart('magneticFieldChart')) {
                Chart.getChart('magneticFieldChart').destroy();
            }
            clearInterval(interval);
        };
    }, []);

    const chartData = {
        labels: Array.from({ length: 10 }, (_, i) => `T-${i + 1}`),
        datasets: [
            {
                label: 'Magnetic Field X (µT)',
                data: magneticFieldData.x,
                borderColor: 'rgba(79,118,246, 1)',
                backgroundColor: 'rgba(79,118,246, 0.2)',
                fill: false,
                tension: 0.4,
                borderWidth: 1.5,
            },
            {
                label: 'Magnetic Field Y (µT)',
                data: magneticFieldData.y,
                borderColor: 'rgba(147,251,212, 1)',
                backgroundColor: 'rgba(147,251,212, 0.2)',
                fill: false,
                tension: 0.4,
                borderWidth: 1.5,
            },
            {
                label: 'Magnetic Field Z (µT)',
                data: magneticFieldData.z,
                borderColor: 'rgba(124,124,124,1)',
                backgroundColor: 'rgba(124,124,124,0.2)',
                fill: false,
                tension: 0.4,
                borderWidth: 1.5,
            },
        ],
    };

    return (
        <div className="chart-container">
            <Line data={chartData} id="magneticFieldChart" />
            <div className="latest-values">
                <strong>X:</strong> {currentValues.x} µT &nbsp;|&nbsp;
                <strong>Y:</strong> {currentValues.y} µT &nbsp;|&nbsp;
                <strong>Z:</strong> {currentValues.z} µT
            </div>
        </div>
    );
};

export default MagneticFieldChart;
