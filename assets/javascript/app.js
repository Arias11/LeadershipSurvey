$("#Wrapper").hide()

$(document).ready(function () {


    // global variables

    var seconds = 240;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var intervalId;
 


    // Function that starts the clock and shows quiz questions
    function starter() {
        clearInterval(intervalId);
        intervalId = setInterval(countdown, 1000);

        $("#Wrapper").show()
    }

    // Set up clock and show it on the page
    $()
    function countdown() {
        minutes = 0;
        seconds--;
        $("#startButton").html("<h2>" + "Time Left: " + seconds + "<h2>");

        // if time is over, the quiz will end and results will show.
        if (seconds <= 0) {
            timesUp()
        }

    }

    // Increments correct score
     $("body").on("click", ".1", function () {
        correctAnswers+= 1;
    })

    $("body").on("click", ".2", function () {
        correctAnswers+= 2;
    })
    $("body").on("click", ".3", function () {
        correctAnswers+= 3;
    })
    $("body").on("click", ".4", function () {
        correctAnswers+= 4;
    })
    $("body").on("click", ".5", function () {
        correctAnswers+= 5;
    })
  


    // Clear Interval and display results 
    function timesUp() {

        clearInterval(intervalId);
        var html =
            "<h2>YOUR SCORE<h2>" +
            "<p>Your Total is: " + correctAnswers + "</p>" +
            "<h3>Score Interpretation:<h3>" +
            "<p>1-10 = You are a failure.</p>" +
            "<p>11-20 = You're okay.</p>" +
            "<p>21-30 = You're the best.</p>";

           
            


        $("#Wrapper").html(html)
    }

    // on click event allows start button to trigger the beginning of the quiz
    $("#startButton").on("click", starter)

    // submit button allows the user to submit his/her answers if they finish before the countdown
    $("body").on("click", "#submit", function () {
        timesUp();

    })



});







