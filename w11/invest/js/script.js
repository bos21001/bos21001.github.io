function doFV() {
    let inv = parseFloat(document.getElementById('inv').value);
    let annual = parseFloat(document.getElementById('annual').value);
    let years = parseFloat(document.getElementById('years').value);
    let periods = parseFloat(document.getElementById('periods').value);
    let result = computeFutureValue(inv, annual, years, periods);
    document.getElementById('output').innerHTML = `$${result.toFixed(2)}`;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    return principal * Math.pow((1 + (annualRate / periodsPerYear)), years * periodsPerYear);
}
