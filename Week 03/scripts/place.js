const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

const temperature = 8; // °C
const windspeed = 10; // km/h

function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const windChillSpan = document.getElementById("windchill");
  if (temperature <= 10 && windspeed > 4.8) {
    const windChill = calculateWindChill(temperature, windspeed);
    windChillSpan.textContent = `${windChill} °C`;
  } else {
    windChillSpan.textContent = "N/A";
  }
}

displayWindChill();