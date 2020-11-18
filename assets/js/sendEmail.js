function sendMail(contactForm) {
	emailjs.send("marshal", "template_tYlG7zl9", {
		"from_name": contactForm.name.value,
		"from_email": contactForm.emailaddress.value,
		"phone_number": contactForm.phonenumber.value,
		"booking_request": contactForm.bookingsummary.value
	}).then(function (response) {
		console.log("SUCCESS", response);
	}, function (error) {
		console.log("FAILED", error);
	});
	document.getElementById('contactForm').reset();
	return false; // To block from loading a new page
}
//validation of modal pop-up
$(document).on("click", "#submit", function () {
	var fname = $("#fname").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var message = $("#message").val();
	if (fname == "") {
		alert("Full Name Required");
		return false;
	} else if (phone == "") {
		alert("Phone number Required");
		return false;
	} else if (email == "") {
		alert("Email Required");
		return false;
	} else if (message == "") {
		alert("Request Required");
		return false;
	} else {
		$("#Submit").modal("show");
		$('#fname_modal').text(fname);
		$('#phone_modal').text(phone);
		$('#email_modal').text(email);
		$('#message_modal').text(message);
	}
});