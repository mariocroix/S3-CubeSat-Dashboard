// // Generates random values for satellite parameters
// export const generateRandomTemperature = () => Math.floor(Math.random() * 20) + 10; // 10°C to 30°C
// export const generateRandomHumidity = () => Math.floor(Math.random() * 50) + 30;    // 30% to 80%
// export const generateRandomAltitude = () => Math.floor(Math.random() * 100) + 500; // 500m to 600m
// export const generateRandomAttitude = () => ({
//     x: (Math.random() * 10 - 5).toFixed(2), // -5° to +5°
//     y: (Math.random() * 10 - 5).toFixed(2), // -5° to +5°
// });
// export const generateRandomMagneticField = () => ({
//     x: (Math.random() * 100 - 50).toFixed(2), // -50µT to +50µT
//     y: (Math.random() * 100 - 50).toFixed(2), // -50µT to +50µT
//     z: (Math.random() * 100 - 50).toFixed(2), // -50µT to +50µT
// });

// src/utils/dataGenerator.js
let previousTemperature = 20; // Start from a realistic initial value
let previousHumidity = 50;    // Start from a realistic initial value

export const generateRandomTemperature = () => {
    const fluctuation = (Math.random() * 2 - 1); // -1 to +1 degree fluctuation
    previousTemperature = Math.max(10, Math.min(30, previousTemperature + fluctuation)); // Keep within 10-30°C
    return previousTemperature;
};

export const generateRandomHumidity = () => {
    const fluctuation = (Math.random() * 4 - 2); // -2% to +2% fluctuation
    previousHumidity = Math.max(30, Math.min(80, previousHumidity + fluctuation)); // Keep within 30%-80%
    return previousHumidity;
};

export const generateRandomAltitude = () => Math.floor(Math.random() * 100) + 500; // 500m to 600m
export const generateRandomAttitude = () => ({
    x: parseFloat((Math.random() * 10 - 5).toFixed(2)), // -5° to +5°
    y: parseFloat((Math.random() * 10 - 5).toFixed(2)), // -5° to +5°
});
export const generateRandomMagneticField = () => ({
    x: (Math.random() * 100 - 50).toFixed(2), // -50µT to +50µT
    y: (Math.random() * 100 - 50).toFixed(2), // -50µT to +50µT
    z: (Math.random() * 100 - 50).toFixed(2), // -50µT to +50µT
});
