import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { generateRandomTemperature, generateRandomHumidity } from '../utils/dataGenerator';
import { Chart } from 'chart.js';

const TemperatureAndHumidityChart = () => {
    const [temperatureData, setTemperatureData] = useState(Array(10).fill(20));
    const [humidityData, setHumidityData] = useState(Array(10).fill(50));

    const [latestTemperature, setLatestTemperature] = useState(20);
    const [latestHumidity, setLatestHumidity] = useState(50);

    useEffect(() => {
        const interval = setInterval(() => {
            setTemperatureData((prevData) => {
                const newValue = generateRandomTemperature();
                setLatestTemperature(newValue);
                return [...prevData.slice(1), newValue];
            });

            setHumidityData((prevData) => {
                const newValue = generateRandomHumidity();
                setLatestHumidity(newValue);
                return [...prevData.slice(1), newValue];
            });
        }, 2500);

        return () => {
            if (Chart.getChart('temperatureChart')) {
                Chart.getChart('temperatureChart').destroy();
            }
            clearInterval(interval);
        };
    }, []);

    const chartData = {
        labels: Array.from({ length: 10 }, (_, i) => `T-${i + 1}`),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatureData,
                borderColor: 'rgba(167,219,216, 1)',
                backgroundColor: 'rgba(167,219,216, 0.2)',
                tension: 0.4,
            },
            {
                label: 'Humidity (%)',
                data: humidityData,
                borderColor: 'rgba(32,158,187, 1)',
                backgroundColor: 'rgb(32,158,187, 0.2)',
                tension: 0.4,
            },
        ],
    };

    return (
        <div>
            <Line data={chartData} id="temperatureChart" />
            <div className="latest-value">
                <strong>Temperature:</strong> {latestTemperature} °C
            </div>
            <div className="latest-value">
                <strong>Humidity:</strong> {latestHumidity} %
            </div>
        </div>
    );
};

export default TemperatureAndHumidityChart;
