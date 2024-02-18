function calculateGradeAndAverage() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const gender = document.getElementById("gender").value;
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    if(firstName=="")
    {
        alert("First name cant be blank");
        firstName.focus();
    }
    const averageMarks = (subject1 + subject2 + subject3) / 3;
    let grade = "N/A";

    if (!isNaN(averageMarks)) {
        if (averageMarks >= 40) {
            grade = "A";
        } else if (averageMarks >= 30) {
            grade = "B";
        } else if (averageMarks >= 20) {
            grade = "C";
        } else {
            grade = "D";
        }
    }

    document.getElementById("studentName").textContent = firstName + " " + lastName;
    document.getElementById("studentBranch").textContent = branch;
    document.getElementById("studentSemester").textContent = semester;
    document.getElementById("studentGender").textContent = gender;
    document.getElementById("averageMarks").textContent = averageMarks.toFixed(2);
    document.getElementById("grade").textContent = grade;

    document.getElementById("result").style.display = 'block';
}