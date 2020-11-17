// function for getting document by id used in form input value 
function _(x) {
	return document.querySelector(x);
}
// car hire button click listener
_("#cBtn").addEventListener("click", function () {
	function fetchHandler(response) {
		if (response.ok) {
			return response.json().then(json => {
				// the status was ok and there is a json body
				return Promise.resolve({
					json: json,
					response: response
				});
			}).catch(err => {
				// the status was ok but there is no json body
				alert("An Error Occurred, please try again");
				return Promise.resolve({
					response: response
				});
			});
		} else {
			return response.json().catch(err => {
				// the status was not ok and there is no json body
				alert("An Error Occurred, please try again");
				throw new Error(response.statusText);
			}).then(json => {
				// the status was not ok but there is a json body
				alert("An Error Occurred, please try again");
				throw new Error(json.error.message); // example error message returned by a REST API
			});
		}
	}
	//  Book flight form inputs
	var pickLocation = _("#pickLocation").value;
	var hireDate = _("#hireDate").value;
	var pickTime = _("#pickTime").value;
	var dropOff = _("#dropOff").value;
	var dropTime = _("#dropTime").value;
	//console.log('car hire clicked');
	var url = 'https://a76dcb3d-31ea-42af-8ff3-5c4a21786b16.mock.pstmn.io/carhire';
	// get class id for showing loading notification
	document.getElementById('status3').style.display = 'inline';
	// check if required input is not empty
	if (pickLocation == '' || hireDate == '' || pickTime == '' || dropOff == '' || dropTime == '') {
		alert("All fields are required");
		document.getElementById('status3').style.display = 'none';
		return false;
	}
	// begin get request
	fetch(url, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json'
			// 'AUTHORIZATION': 'Bearer '+ token
		})
	}).then(fetchHandler).then(response => {
		//clear form
		document.getElementById('pickLocation').value = '';
		document.getElementById('hireDate').value = '';
		document.getElementById('pickTime').value = '';
		document.getElementById('dropOff').value = '';
		document.getElementById('dropTime').value = '';
		document.getElementById('status3').style.display = 'none';
		// add response to result variable
		var result = response.json;
		localStorage.setItem("car", JSON.stringify(result));
		//window.open('./car.html', '_blank');
		window.location = './car.html';
	});
});