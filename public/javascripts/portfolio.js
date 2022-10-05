// File Name: portfolio.js
// Name: Christian Aduna
// Student ID: 301250889
// Date: October 4, 2022

// Function to capture the information entered by the user
function submitForm() {
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var phonenum = document.getElementById("phone").value;
    var emailadd = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
}

document.getElementById("submit");
if (submit.addEventListener) {
    submit.addEventListener("click", submitForm, false);
} else if (submit.attachEvent) {
    submit.attachEvent("onclick", submitForm);
}