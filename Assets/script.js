var currentDay = document.querySelector("#currentDay");
let currentHour = parseInt(moment().format('H'));
const rowsEl = document.getElementsByClassName("row");

//check each row for row time vs current time, apply/remove classes accordingly
Array.from(rowsEl).forEach(row => {
    let rowIdString = row.id, rowTime;
    if (rowIdString) {
        rowTime = parseInt(rowIdString);
    }
    if (rowTime) {
        if (currentHour === rowTime) {
            $(rowsEl).addClass("present")
            $(rowsEl).removeClass("past")
            $(rowsEl).removeClass("future")
        }
        else if (currentHour < rowTime) {
            $(rowsEl).addClass("past")
            $(rowsEl).removeClass("present")
            $(rowsEl).removeClass("future")
        }
        else {
            $(rowsEl).addClass("future")
            $(rowsEl).removeClass("past")
            $(rowsEl).removeClass("present")
        }
    };

});

// display date and time
setInterval(function(audit) {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    var time = currentDay
    console.log(time);

    // if (moment().isAfter(time)) {
    //     $(audit).addClass("past");
    // }
    // else if (Math.abs(moment().diff(time, "hours")) <=1) {
    //     $(audit).addClass("present")
    // }
    // else {
    //     $(audit).addClass("future")
    // }
}, 1000);

