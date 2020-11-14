// function for getting document by id used in form input value 
function _(x) {
	return document.querySelector(x);
}
// search hotel button click listener
_("#hBtn").addEventListener("click", function () {
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
	//  Book hotel form inputs
	var location = _("#loc").value;
	var checkin = _("#checkin").value;
	var checkout = _("#checkout").value;
	var rooms = _("#rooms").value;
	var children2 = _("#children2").value;
	var adult2 = _("#adult2").value;
	var inputStar = _("#inputStar").value;
	// get API access token from localstorag
	var token = localStorage.getItem("token");
	var url = 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=' + location;
	// get class id for showing loading notification
	document.getElementById('status1').style.display = 'inline';
	// check if required input is not empty
	if (location == '' || checkin == '' || checkout == '' || rooms == '' || adult2 == '' || inputStar == '') {
		alert("All fields are required");
		document.getElementById('status1').style.display = 'none';
		return false;
	} else if (document.getElementById('loc').value.length > 3 || document.getElementById('loc').value.length < 3) {
		alert("Please Enter IATA 3-letter codes for Cities");
		// disable loading
		document.getElementById('status').style.display = 'none';
		return false;
	}
	// check if location code is valid
	else if (location != 'SYD' && location != 'BKK' && location != 'NYC' && location != 'JFK' && location != 'LON' && location != 'PAR' && location != 'GVA' && location != 'FRA' && location != 'BOM' && location != 'FCO' && location != 'ACC' && location != 'KIN' && location != 'ABV' && location != 'OSL' && location != 'GRU' && location != 'PEK' && location != 'YVR' && location != 'YYZ' && location != 'GLA' && location != 'BCN' && location != 'DXB' && location != 'CPT' && location != 'TLV' && location != 'CDG' && location != 'HAV' && location != 'LHR' && location != 'DUB' && location != 'SVO' && location != 'ADD' && location != 'IST' && location != 'NRT' && location != 'BRU' && location != 'SCL' && location != 'ATL' && location != 'CAI' && location != 'JNB' && location != 'LOS' && location != 'CPH' && location != 'NBO' && location != 'SOF' && location != 'MEX' && location != 'NAS' && location != 'ATH' && location != 'AMS' && location != 'SJU' && location != 'ZAG' && location != 'ARN' && location != 'LIS' && location != 'EZE' && location != 'ASU' && location != 'ICN' && location != 'AKL' && location != 'MNL' && location != 'HKG' && location != 'SGN' && location != 'CCS' && location != 'DMM' && location != 'DOH' && location != 'DEL') {
		alert("Inputed Location not Known");
		document.getElementById('status').style.display = 'none';
		return false;
	}
	// begin get request
	fetch(url, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json',
			'AUTHORIZATION': 'Bearer ' + token
		})
	}).then(fetchHandler).then(response => {
		//clear form
		document.getElementById('loc').value = '';
		document.getElementById('checkin').value = '';
		document.getElementById('checkout').value = '';
		document.getElementById('rooms').value = '';
		document.getElementById('children2').value = '';
		document.getElementById('adult2').value = '';
		document.getElementById('inputStar').value = '';
		document.getElementById('status1').style.display = 'none';
		// for loop in response object and push all object into result variable
		var result = [];
		var d = [];
		d = response.json.data;
		for (var i in d) {
			d[i].id = i;
			result.push(d[i]);
		}
		// store hotel data in local storage
		localStorage.setItem("hoteldata", JSON.stringify(result));
		//window.open('./hotel.html', '_blank');
		window.location = './hotel.html';
	});
});
/*// fetch hotel data from localstorage
var result = JSON.parse(localStorage.getItem("hoteldata"));
// for loop objects in result variable and inject into html table
for (i in result) {
	document.getElementById('hotel').insertAdjacentHTML("beforeend", "<tr><td>" + result[i].offers[0].checkInDate + " </th><td>" + result[i].offers[0].checkOutDate + "</td><td>" + result[i].offers[0].price.total + "</td><td>" + result[i].hotel.name + "</td><td>" + result[i].hotel.address.cityName + "</td>" + "<td>" + result[i].hotel.address.lines[0] + "</td><td>" + result[i].hotel.contact.phone + "</td></tr>");
}*/