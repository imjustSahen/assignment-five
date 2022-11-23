// Add date to header
var currentDate = dayjs().format("MMMM D, YYYY");
$("#currentDate").text(currentDate);

function trackTime() {
  // Get current hour
  const timeNow = dayjs().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // Adjust background colors depending on past, present, & future
    if (blockTime < timeNow) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

// Add input to Local Storage
$(function () {
  // Event listener
  $(".saveBtn").on("click", function () {
    // Use JQuery to get values of description
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    // Save schedule to local storage
    localStorage.setItem(hour, description);
  });

  // Get description from local storage
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  trackTime();
});

// Remove Individual Inputs from Local Storage and text area
$(function () {
  // Event Listener
  $(".saveBtn").on("dblclick", function () {
    var hour = $(this).parent().attr("id");
    // Use Jquery to clear values with an empty string
    var description = $(this).siblings(".description").val("");

    // Remove schedule from Local Storage
    localStorage.removeItem(hour, description);
  });
});
