function correctFootwear() {
    //INPUT - From .htm take input into a variable named weather
    const weather = document.getElementById('weather').value;
    let output;
    //PROCESSING - In a switch statement process the right information according to the user`s choice
    switch (weather) {
        case 'hot':
            output = "For a hot day the correct footwear is sandals.";
            break;
        case 'rain':
            output = "For a rainny day the correct footwear is galoshes.";
            break
        case 'snow':
            output = "For a snowy day the correct footwear is boots.";
            break;
        case 'unknown':
            output = "If you don't know just take a pair of shoes 😁";
            break;
        default:
            output = "Choose one!!"
    }
    //OUTPUT - Print out the information in the .htm
    document.getElementById('output').innerHTML = output;
}
