$("#btnSend").click(function () {

    var finalAssignement = ($("#assignment").val() / 100) * 50;
    
    var finalQuiz = ($("#quizzes").val() / 100) * 10;
    
    var finalGroup = ($("#group").val() / 100) * 10;
    
    var finalMidterm = ($("#midterm").val() / 100) * 10;
    var finalFinal = ($("#final").val() / 100) * 10;
    var finalIntex = ($("#intex").val()/ 100) * 10;
    var final = (finalAssignement + finalQuiz + finalGroup + finalMidterm + finalFinal + finalIntex);
    var output = "Your final grade is " + final + "%.";
    var holder = "";
    if (final > 92.99) {
        holder = " Your grade is an A."
    }
    else if (final > 89.99 && final < 93) {
        holder = " Your grade is an a-"
    }
    else if (final > 86.99 && final < 90) {
        holder = " Your grade is an B+"
    }
    else if (final > 82.99 && final < 87) {
        holder = " Your grade is an B"
    }
    else if (final > 79.99 && final < 83) {
        holder = " Your grade is an B-"
    }
    else if (final > 76.99 && final < 80) {
        holder = " Your grade is an C+"
    }
    else if (final > 72.99 && final < 77) {
        holder = " Your grade is an C"
    }
    else if (final > 69.99 && final < 73) {
        holder = " Your grade is an C-"
    }
    else if (final < 70) {
        holder = " Your grade is an F"
    }
    $("#output").html(output+holder);
})