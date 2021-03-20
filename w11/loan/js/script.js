
function doPayment() {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let years = parseFloat(document.getElementById('years').value);
    let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
    let paymentOutput = computePayment(principal, (annualRate / periodsPerYear), (years * periodsPerYear));
    document.getElementById('paymentOutput').innerHTML = "Payment: $" + paymentOutput.toFixed(2)
}

function doBalance() {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let years = parseFloat(document.getElementById('years').value);
    let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
    let payPerPeriod = parseFloat(document.getElementById('payPerPeriod').value);
    let paymentPerPeriod = computePayment(principal, (annualRate / periodsPerYear), (years * periodsPerYear));
    let balanceOutput = computeBalance(principal, (annualRate / periodsPerYear), payPerPeriod, (annualRate / periodsPerYear), paymentPerPeriod);
    document.getElementById('balanceOutput').innerHTML = "Payoff amount: $" + balanceOutput.toFixed(2);
}

function computePayment(loanAmount, interest, totalPeriods) {
    return (loanAmount * interest) / (1 - Math.pow(1 + interest, - totalPeriods));
}

function computeBalance(loanAmount, interest, paidToDate, interestPerPeriod, paymentPerPeriod) {
    return (loanAmount * Math.pow(1 + interest, paidToDate)) - ((paymentPerPeriod * (Math.pow(1 + interest, paidToDate) - 1)) / (interestPerPeriod));
}
