
document.getElementById('output').innerHTML = 'Result: ';
function doInputOutput() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let windspeed = parseFloat(document.getElementById('windspeed').value);
    let windchill = windChill(temperature, windspeed);
    if (temperature <= 50 && windspeed >= 3) {
        document.getElementById('output').innerHTML = `Result: ${windchill.toFixed(1)} °F`;
    }
    else if (windspeed >= 3) {
        document.getElementById('output').innerHTML = 'Result: ERROR';
        alert('A Wind Chill value cannot be calculated for wind speeds less than 3 miles/hour');
    }
    else if (temperature <= 50) {
        document.getElementById('output').innerHTML = 'Result: ERROR';
        alert('A Wind Chill value cannot be calculated for temperatures greater than 50 degrees Fahrenheit.');
    }
}
function windChill(tempF, speed) {
    return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + 0.4275 * (tempF * Math.pow(speed, 0.16));
}
