// Add date to header
const currentDate = dayjs().format("MMMM D, YYYY");
$("#currentDate").text(currentDate);

function trackTime() {
  // Get current hour
  const timeNow = dayjs().hour();

  $(".time-block").each(function () {
    const blockTime = parseInt($(this).attr("id").split("hour")[1]);

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

$(function () {
  // Event listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    let hour = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();

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

// $(function () {
//   $(function () {
//     $(".saveBtn").on("dblclick", function () {
//       localStorage.removeItem(hour, description);
//     });

//     $("#hour8 .description").val(localStorage.removeItem("hour8"));
//     $("#hour9 .description").val(localStorage.removeItem("hour9"));
//     $("#hour10 .description").val(localStorage.removeItem("hour10"));
//     $("#hour11 .description").val(localStorage.removeItem("hour11"));
//     $("#hour12 .description").val(localStorage.removeItem("hour12"));
//     $("#hour13 .description").val(localStorage.removeItem("hour13"));
//     $("#hour14 .description").val(localStorage.removeItem("hour14"));
//     $("#hour15 .description").val(localStorage.removeItem("hour15"));
//     $("#hour16 .description").val(localStorage.removeItem("hour16"));
//     $("#hour17 .description").val(localStorage.removeItem("hour17"));
//   });
// });
