var scheduleInput = document.querySelector(".description");
var clearBtn = document.querySelector("#clearSch");

// current date and time

var todayDate = moment().format("ddd, MMM Do, YYYY");
$("#currentDay").html(todayDate);

// added click event "save button" with local storage
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var inputText = $(this).siblings(".description").val();
        var bodyTime = $(this).parent().attr("id");

        localStorage.setItem(bodyTime, inputText);
    })
});

// retrieve saved information from local storage
$(".time-block").each(function() {
    var id = $(this).attr("id");
    var storedSch = localStorage.getItem(id);

    if (storedSch !== null) {
        $(this).children(".description").val(storedSch);
    }
});



// added function to color code past, present and future task

function timeTracker() {
    var currentTime = moment().hours();
    $(".time-block").each(function() {
        var scheduleTime = parseInt($(this).attr("id"));

        if (scheduleTime > currentTime) {
            $(this).addClass("future")
        } else if (scheduleTime === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

timeTracker();


// added clear local storge button
clearBtn.addEventListener("click", function() {
    scheduleInput.innerHTML = "";
    localStorage.clear();
    window.location.reload()
});