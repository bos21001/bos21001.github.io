function simpleCalc() {
    // INPUT - Take the information from html into variables
    const number1 = document.getElementById('number1').value,
        arith = document.getElementById('arith').value,
        number2 = document.getElementById('number2').value,
        result = document.getElementById('result').value;
    const message1 = "You entered " + result + ", ";

    // PROCESSING - Calculate the information with a switch statements.
    // After compares with and if and else statment.
    let calc, message2;
    switch (arith) {
        case '+':
            calc = parseFloat(number1) + parseFloat(number2);
            message2 = "the sum equals " + calc + ".";
            break;

        case '-':
            calc = parseFloat(number1) - parseFloat(number2);
            message2 = "the subtraction equals " + calc + ".";
            break;

        case '*':
            calc = parseFloat(number1) * parseFloat(number2);
            message2 = "the multiplication equals " + calc + ".";
            break;

        case '/':
            calc = parseFloat(number1) / parseFloat(number2);
            message2 = "the division equals " + calc + ".";
            break;
        default:
            message2 = "but your arithmetic operator was not recognized " + "<br>" + "Enter ' + ', ' - ', ' * ', or ' / '.";
    }

    let message3;
    if (calc == result) {
        message3 = "Correct! 🏆"
    }
    else message3 = "Incorrect 😢";
    
    //OUTPUT - Print the information the giving result, the right result and if it is right or not with "Correct! 🏆" or "Incorrect 😢" 
    document.getElementById('output1').innerHTML = message1;
    document.getElementById('output2').innerHTML = message2;
    document.getElementById('output3').innerHTML = message3;
}
