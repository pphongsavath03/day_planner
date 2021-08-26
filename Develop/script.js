var todayDate = moment().format("ddd, MMM Do, YYYY h:mm:ss a");
$("#currentDay").html(todayDate);

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var inputText = $(this).siblings(".description").val();
        var bodyTime = $(this).parent().attr("id");

        localStorage.setItem(bodyTime, inputText);
    })

    function timeTracker() {
        var currentTime = moment().hour();
        $(".time-block").each(function() {
            var scheduleTime = parseInt($(this).attr("id").split("hour")[1]);
            if (scheduleTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (scheduleTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    $("#hourOne .description").val(localStorage.getItem("hourOne"));
    $("#hourTwo .description").val(localStorage.getItem("hourTwo"));
    $("#hourThree .description").val(localStorage.getItem("hourThree"));
    $("#hourFour .description").val(localStorage.getItem("hourFour"));
    $("#hourFive .description").val(localStorage.getItem("hourFive"));
    $("#hourSix .description").val(localStorage.getItem("hourSix"));
    $("#hourSeven .description").val(localStorage.getItem("hourSeven"));
    $("#hourEight .description").val(localStorage.getItem("hourEight"));
    $("#hourNine .description").val(localStorage.getItem("hourNine"));
    $("#hourTen .description").val(localStorage.getItem("hourTen"));
    $("#hourEleven .description").val(localStorage.getItem("hourEleven"));
    $("#hourTwelve .description").val(localStorage.getItem("hourTwelve"));
    $("#hourThirteen .description").val(localStorage.getItem("hourThirteen"));
    $("#hourFourteen .description").val(localStorage.getItem("hourFourteen"));
    $("#hourFifteen .description").val(localStorage.getItem("hourFifteen"));
    $("#hourSixteen .description").val(localStorage.getItem("hourSixteen"));
    $("#hourSeventeen .description").val(localStorage.getItem("hourSeventeen"));
    $("#hourEighteen .description").val(localStorage.getItem("hourEighteen"));
    $("#hourNinteen .description").val(localStorage.getItem("hourNinteen"));
    $("#hourTwenty .description").val(localStorage.getItem("hourTwenty"));

    timeTracker();
})