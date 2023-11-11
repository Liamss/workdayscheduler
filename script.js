
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

console.log("textarea");

});

// Load data from local storage - upon each open, load the schedule by running through each timeblock, finding the text for the hour, then pulling the associated text which = text area 

function LoadSchedule() {
    $('.time-block').each(function () {
        var hour = $(this).find('.hour').text();
        var text = localStorage.getItem(hour);

// If there is text, then load it

        if (text) {
            $(this).find('textarea').val(text);
        }
    })
}

// Call the function! 

LoadSchedule();

// Function for changing colours = change block colours, for each text area, based on the hour 
// NOT YET WORKING - i don't think hourBlock is returning a number because it says 9AM for example, then currentHour displays a number

function changeBlockColours() {
    $('.time-block').each(function () {
        var hourBlock = parseInt($(this).attr('id'));
        var textArea = $(this).find('textarea');


// If logic to set the colours for three options

        if (hourBlock < currentHour) {
        textArea.addClass('past');
        } else if (hourBlock === currentHour) {
        textArea.addClass('present');
        } else {
        textArea.addClass('future');
        }
    });
}

// Call the function

changeBlockColours();
