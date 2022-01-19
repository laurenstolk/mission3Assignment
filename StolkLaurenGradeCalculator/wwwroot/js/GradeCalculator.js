
// send an alert with final percentage and letter grade
$("#btnSend").click(function () {
    // calculate final percentage with weights
    var finalPerc = ( ($("#assignment").val() * 0.55) +
        ($("#groupProject").val() * 0.05) +
        ($("#quiz").val() * 0.1) +
        ($("#exam").val() * 0.2) +
        ($("#intex").val() * 0.1)).toFixed(2)

    // initialize letter grade variable
    var letterGrade;

    // determine letter grade
    if (finalPerc >= 94) {
        letterGrade = "A";
    } else if (finalPerc >= 90) {
        letterGrade = "A-";
    } else if (finalPerc >= 87) {
        letterGrade = "B+";
    } else if (finalPerc >= 84) {
        letterGrade = "B";
    } else if (finalPerc >= 80) {
        letterGrade = "B-";
    } else if (finalPerc >= 77) {
        letterGrade = "C+";
    } else {
        letterGrade = "E";
    };

    alert("Final Grade: " + finalPerc +
        " (" + letterGrade + ")");
});

//test that this jquery page is hooked in correctly
console.log("t4est");

