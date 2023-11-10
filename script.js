
// Using day.js to pull in todays date

var currentday = dayjs().format('DD/MM/YYYY')

console.log(currentday);


// Display currentday in the header

document.getElementById('currentDay').textContent = "Today is " + currentday;

