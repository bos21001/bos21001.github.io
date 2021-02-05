function convertNumbers(){
    const lbs = parseFloat(document.getElementById('lbs').value);
    const lbs_to_kg = (parseFloat(lbs) * 0.453592).toFixed(2);
    const output = `${lbs} lbs = ${lbs_to_kg} Kg`;
    document.getElementById('output').innerHTML = output;
    }
  