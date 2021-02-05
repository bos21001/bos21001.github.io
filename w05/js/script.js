function convertNumbers(){
    // INPUT = take the entered amount (float) to lbs variable
    const lbs = parseFloat(document.getElementById('lbs').value);
    // PROCESSING = create a variable to store the conversion and the output information
    const lbsToKg = (parseFloat(lbs) * 0.453592).toFixed(1);
    const output = `${lbs} lbs = ${lbsToKg} Kg`;
    // OUTUPUT = displays x lbs = y Kg
    document.getElementById('output').innerHTML = output;
    }
  
