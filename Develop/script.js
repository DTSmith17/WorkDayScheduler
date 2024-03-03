// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
    $('.saveBtn').on('click', function() {
      const timeBlockId = $(this).closest('.time-block').attr('id');
      const userIput = $(this).siblings('.description').val();
      
      //checks to see if variables are empty or not
      if (timeBlockId && userIput) {
        localStorage.setItem(timeBlockId, userIput);
      }
    })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //gets the current hour from dayjs
    const currentHour = dayjs().hour();

    //for each time block im grabbing the id from the HTML and comparing it to the current hour to determine whether its past, present or future time
   $(".time-block" ).each(function( index ) {
      const blockHr = $(this).attr('id');
      if (blockHr == currentHour) {
        $(this).addClass("present")
      } else if (blockHr < currentHour) {
        $(this).addClass("past")
      } else if (blockHr > currentHour) {
        $(this).addClass("future")
      }
    });
   

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  $(".time-block").each(function() {
    //create variable to get the id an get the items in local storage from that Id
    const timeBlockId = $(this).attr('id');
    const userInput = localStorage.getItem(timeBlockId);

    if (userInput) {
      $(this).find('.description').val(userInput); // Set textarea value to that which is related in localstorage
    }
  });

  
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format("dddd, MMMM D, YYYY"));
      
  
});


