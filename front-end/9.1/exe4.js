const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => {
  console.log(`Error getting temperature: ${errorReason}`);
}  
// definição da função sendMarsTemperature...
function sendMarsTemperature(callback, callError  ) {
  try {
    return console.log(`${callback}`);
  } catch (error) {
    console.log(callError(error));
  }
}
sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature), handleError);