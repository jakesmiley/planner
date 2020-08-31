var currentDay = document.querySelector("#currentDay");
let currentHour = parseInt(moment().format('H'));
const rowsEl = document.getElementsByClassName("row");



//check each row for row time vs current time, apply/remove classes accordingly
$(".time-block").each(function() {
    var rowTime = parseInt($(this).attr("id"));
    console.log(rowTime + "rowTime");

    if (rowTime) {
        if (currentHour === rowTime) {
            $(this).addClass("present")
            $(this).removeClass("past")
            $(this).removeClass("future")
        }
        else if (currentHour > rowTime) {
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
    };

});

//save clicked
// $(".saveBtn").on("click", "button", function() {

// })

// var saveTask = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks))
// }


// display date and time
setInterval(function(audit) {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    var time = currentDay
    console.log(time);
}, 1000);

