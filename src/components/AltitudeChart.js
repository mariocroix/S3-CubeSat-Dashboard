import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { generateRandomAltitude } from '../utils/dataGenerator';

const AltitudeChart = () => {
    const [altitudeData, setAltitudeData] = useState(Array(10).fill(500));
    const [latestAltitude, setLatestAltitude] = useState(500);

    useEffect(() => {
        const interval = setInterval(() => {
            setAltitudeData((prevData) => {
                const newValue = generateRandomAltitude();
                setLatestAltitude(newValue);
                return [...prevData.slice(1), newValue];
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const chartData = {
        labels: Array.from({ length: 10 }, (_, i) => `T-${i + 1}`),
        datasets: [
            {
                label: 'Altitude (m)',
                data: altitudeData,
                backgroundColor: 'rgb(254,234,165, 0.2)',
                borderColor: 'rgb(254,234,165,1)',
                borderWidth: 1.5,
            },
        ],
    };

    return (
        <div>
            <Bar data={chartData} />
            <div className="latest-value">
                <strong>Altitude:</strong> {latestAltitude} m
            </div>
        </div>
    );
};

export default AltitudeChart;
