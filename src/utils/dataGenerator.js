let previousTemperature = 20; 
let previousHumidity = 50;    

export const generateRandomTemperature = () => {
    const fluctuation = (Math.random() * 2 - 1);
    previousTemperature = Math.max(10, Math.min(30, previousTemperature + fluctuation)); 
    return previousTemperature;
};

export const generateRandomHumidity = () => {
    const fluctuation = (Math.random() * 4 - 2); 
    previousHumidity = Math.max(30, Math.min(80, previousHumidity + fluctuation)); 
    return previousHumidity;
};

export const generateRandomAltitude = () => Math.floor(Math.random() * 100) + 500; 
export const generateRandomAttitude = () => ({
    x: parseFloat((Math.random() * 10 - 5).toFixed(2)),
    y: parseFloat((Math.random() * 10 - 5).toFixed(2)),
});
export const generateRandomMagneticField = () => ({
    x: (Math.random() * 100 - 50).toFixed(2), 
    y: (Math.random() * 100 - 50).toFixed(2), 
    z: (Math.random() * 100 - 50).toFixed(2), 
});
