function sendMail(contactForm) {
    emailjs.send("marshal", "template_tYlG7zl9", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "phone_number": contactForm.phonenumber.value,
        "booking_request": contactForm.bookingsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById('contactForm').reset();
    return false;  // To block from loading a new page
}

var fname = _("#fname").value;
var phone = _("#phone").value;
var email = _("#email").value;
var message = _("#message").value;

// Conditions
function mySub() {
    var x = document.getElementById("Submit");
    
if (fname == '' || phone == '' || email == '' || message == '')  {
    alert("All fields are required");
    subtn.onclick = function() {
    x.style.display = "none";
}
    
 	// disable loading
    x.style.display = "false";
    return false;
} else {
    x.style.display = "block";
 	return true;
};
};