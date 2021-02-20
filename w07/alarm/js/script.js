let now = new Date();
let month = now.getMonth();
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
const weekdays = (dayOfWeek >= 1 && dayOfWeek <= 5);

//New Year = (month = 0, dayOfMonth = 1, (dayOfWeek >= 1 && dayOfWeek <= 5))
//U.S Independence Day = (month = 6, dayOfMonth = 4, (dayOfWeek >= 1 && dayOfWeek <= 5))
//Christmas = (month = 11, dayOfMonth = 24, dayOfWeek = (dayOfWeek >= 1 && dayOfWeek <= 5))
let alarm;
if (month == 0 && dayOfMonth == 1 && weekdays == true) {
    alarm = "Sleep in! 🥱";
}
else if (month == 6 && dayOfMonth == 4 && weekdays == true) {
    alarm = "Sleep in! 🥱";
}
else if (month == 11 && dayOfMonth == 24 && weekdays == true) {
    alarm = "Sleep in! 🥱";
}
else {
    alarm = "Get Up! 😝";
}

document.getElementById('actualDate').innerHTML = now;
document.getElementById('alarm').innerHTML = alarm;
