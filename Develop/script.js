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

            // added function to color code past, present and future task
            function timeTracker() {
                var currentTime = (moment().hour(); $(".time-block").each(function() {
                        var scheduleTime = parseInt($(this).attr("id").split(".hour")[1]);

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

                // retrieve saved information from local storage
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

                timeTracker();
            })


        // added clear local storge button
        clearBtn.addEventListener("click", function() {
            scheduleInput.innerHTML = "";
            localStorage.clear();
            window.location.reload()
        });