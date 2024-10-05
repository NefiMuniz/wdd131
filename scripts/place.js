// calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Display the wind chill
function displayWindChill() {
    const temperature = 32; // Celsius
    const windSpeed = 10; // km/h
    const windChillElement = document.getElementById('wind-chill');

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed) + 'ºC';
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Footer year and last modified date
function displayFooterDate() {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;

    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
    displayWindChill();
    displayFooterDate();
});
