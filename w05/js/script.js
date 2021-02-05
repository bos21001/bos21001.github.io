function convertNumbers(){
    // INPUT = take the entered amount (float) to lbs variable
    const lbs = parseFloat(document.getElementById('lbs').value);
    // PROCESSING = create a variable to store the conversion and the output information
    const lbs_to_kg = (parseFloat(lbs) * 0.453592).toFixed(2);
    const output = `${lbs} lbs = ${lbs_to_kg} Kg`;
    // OUTUPUT = displays x lbs = y Kg
    document.getElementById('output').innerHTML = output;
    }
  