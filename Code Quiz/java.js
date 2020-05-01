var counter = 1;
var score = 0;

var time = 60;                          // Initialized time
$(".timer").text(time);                 // Render initial time
var timer = setInterval(function () {
    time--;                             // Decrements the time
    $(".timer").text(time);             // Updates time on page
}, 1000)

var mouseOver = $(document).on("click mouseover", "p", function (event) {
    if (event.type === "click") {
        var isCorrect = $(this).data("correct");
        if (isCorrect === true) {
            score += 5;
            $(".score").text(score);
        } else {
            score -= 2;
            $(".score").text(score);
        }
        console.log(isCorrect);
        console.log(score);
        $(".quest-ban" + counter).css("visibility", "hidden");
        $(".quest-ban" + (counter + 1)).css("visibility", "visible");
        counter++;

        if(counter === 11) {
            $(".end-quiz").css("visibility","visible");
            // console.log("jumi");
        }
    }
    $(this).css("background-color", "gray");
})

$(".submit-initials").on("click", function(){
    var initials = $(".initals").val();
    // console.log(initials);
    $("#score-result").text(initials);
    $("#view-score").text(score);
})

var mouseLeave = $(document).on("mouseleave", "p", function () {
    $(this).css("background-color", "white");
})


