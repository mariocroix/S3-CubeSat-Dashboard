import React from 'react';
import TemperatureAndHumidityChart from './components/TemperatureAndHumidityChart';
import AltitudeChart from './components/AltitudeChart';
import AttitudeChart from './components/AttitudeChart';
import MagneticFieldChart from './components/MagneticFieldChart';
import './App.css';
import './chartSetup';

const App = () => {
    return (
        <div className="App">
            <div className="chart-container">
                <div className="chart-item">
                    <TemperatureAndHumidityChart />
                </div>
                <div className="chart-item">
                    <AltitudeChart />
                </div>
                <div className="chart-item">
                    <AttitudeChart label="Attitude" />
                </div>
                <div className="chart-item">
                    <MagneticFieldChart label="Magnetic Field" />
                </div>
            </div>
        </div>
    );
};

export default App;
