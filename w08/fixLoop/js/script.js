let output1 = "";
let i = 0;
while (i < 2) {
    output1 += `Part 1:${i}<br>`;
    i++;
}

let output2 = "";
for (let j = 0; j < 3; j++) {
    if (j != 2) {
        output2 += `Part 2:${j}, `;
    }
    else {
        output2 += `Part 2:${j}`;
    }
}

let output3 = "";
for (let k = 0; k < 4; k++) {
    output3 += k + " ";
}

let balance = 1000;
const rate = .10;
let n = 30;
for (let s = 1; s < n; s++) {
    interest = balance * rate;
    balance += interest;
}

document.getElementById('display1').innerHTML = output1;
document.getElementById('display2').textContent = output2;
document.getElementById('display3').textContent = output3;
document.getElementById('display4').textContent = balance.toFixed(2);