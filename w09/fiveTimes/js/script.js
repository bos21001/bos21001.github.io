let mult;
let resu = 1;
let output = ""

for (i = 1; i <= 12; i++) {
    mult = "5 X " + i + " = " + (5 * i);
    output += mult + "<br>";
}
document.getElementById('fiveTimes').innerHTML = output;