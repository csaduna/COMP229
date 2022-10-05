// Student ID: 301250889
// Name: Christian Aduna
// Date: October 8, 2022

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