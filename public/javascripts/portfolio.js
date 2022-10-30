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

console.log("it goes to the client-side.");

if(getTitle == "Inventory List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

if(getTitle == "Sign-up Form")
{
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange); 
}

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}