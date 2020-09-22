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
    return false;  // To block from loading a new page
}
