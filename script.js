
// Using day.js to pull in todays date

var currentDay = dayjs().format('DD/MM/YYYY')

console.log(currentDay);


// Display currentday in the header

document.getElementById('currentDay').textContent = "Today is " + currentDay;


// Using day.js to pull in the hour 

var currentHour = dayjs().hour();

console.log(currentHour);


// Adding function to saveBtn. Event handler + collecting text and hour 

$('.saveBtn').on('click', function() {
    var text = $(this).siblings('textarea').val();
    var hour = $(this).siblings('.hour').text();

// Save in local storage, linking hour and text together

localStorage.setItem(hour, text);

console.log("textarea")

});

// Load data from local storage 

function LoadSchedule() {
    $('.time-block').each(function () {
        var hour = $(this).find('.hour').text();
        var text = localStorage.getItem(hour);

        if (text) {
            $(this).find('textarea').val(text);
        }
    })
}

// Call the function! 

LoadSchedule();

