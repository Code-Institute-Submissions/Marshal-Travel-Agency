// function for getting document by id used in form input value 
function _(x) {
	return document.querySelector(x);
}
// search flight button click listener
_("#fBtn").addEventListener("click", function () {
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
	var dateReturn = _("#dateReturn").value;
	var outBoundLeg = _("#outBoundLeg").value;
	var inBoundLeg = _("#inBoundLeg").value;
	var departureDate = _("#departureDate").value;
	var adult = _("#adult").value;
	var adultValue = parseInt(adult);
	// get API access token from localstorag
	var token = localStorage.getItem("token");
	var url = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=' + outBoundLeg + '&destinationLocationCode=' + inBoundLeg + '&departureDate=' + departureDate + '&returnDate=' + dateReturn + '&adults=' + adultValue + '&max=5';
	// get class id for showing loading notification
	document.getElementById('status').style.display = 'inline';
	// check if required input is not empty
	if (inBoundLeg == '' || outBoundLeg == '' || departureDate == '' || dateReturn == '' || adult == '') {
		alert("All fields are required");
		// disable loading
		document.getElementById('status').style.display = 'none';
		return false;
	} else if (document.getElementById('inBoundLeg').value.length > 3 || document.getElementById('inBoundLeg').value.length < 3) {
		alert("Please Enter IATA 3-letter codes for Airports");
		// disable loading
		document.getElementById('status').style.display = 'none';
		return false;
	} else if (document.getElementById('outBoundLeg').value.length > 3 || document.getElementById('outBoundLeg').value.length < 3) {
		alert("Please Enter Location code in 3 words");
		// disable loading
		document.getElementById('status').style.display = 'none';
		return false;
	}
	// check from where input location code
	else if (inBoundLeg != 'SYD' && inBoundLeg != 'BKK' && inBoundLeg != 'JFK' && inBoundLeg != 'LON' && inBoundLeg != 'PAR' && inBoundLeg != 'GVA' && inBoundLeg != 'FRA' && inBoundLeg != 'GRU' && inBoundLeg != 'PEK' && inBoundLeg != 'YVR' && inBoundLeg != 'OSL' && inBoundLeg != 'ABV' && inBoundLeg != 'GLA' && inBoundLeg != 'BCN' && inBoundLeg != 'DXB' && inBoundLeg != 'CPT' && inBoundLeg != 'TLV' && inBoundLeg != 'CDG' && inBoundLeg != 'HAV' && inBoundLeg != 'LHR' && inBoundLeg != 'DUB' && inBoundLeg != 'SVO' && inBoundLeg != 'BOM' && inBoundLeg != 'FCO' && inBoundLeg != 'ACC' && inBoundLeg != 'KIN' && inBoundLeg != 'YYZ' && inBoundLeg != 'ADD' && inBoundLeg != 'IST' && inBoundLeg != 'NRT' && inBoundLeg != 'BOM' && inBoundLeg != 'BRU' && inBoundLeg != 'SCL' && inBoundLeg != 'ATL' && inBoundLeg != 'CAI' && inBoundLeg != 'JNB' && inBoundLeg != 'LOS' && inBoundLeg != 'CPH' && inBoundLeg != 'NBO' && inBoundLeg != 'SOF' && inBoundLeg != 'MEX' && inBoundLeg != 'NAS' && inBoundLeg != 'ATH' && inBoundLeg != 'AMS' && inBoundLeg != 'SJU' && inBoundLeg != 'ZAG' && inBoundLeg != 'ARN' && inBoundLeg != 'LIS' && inBoundLeg != 'EZE' && inBoundLeg != 'ASU' && inBoundLeg != 'ICN' && inBoundLeg != 'AKL' && inBoundLeg != 'MNL' && inBoundLeg != 'HKG' && inBoundLeg != 'SGN' && inBoundLeg != 'CCS' && inBoundLeg != 'DMM' && inBoundLeg != 'DOH' && inBoundLeg != 'DEL') {
		alert("Inputed Locations not Known");
		document.getElementById('status').style.display = 'none';
		return false;
		// check to where input location code
	} else if (outBoundLeg != 'SYD' && outBoundLeg != 'BKK' && outBoundLeg != 'JFK' && outBoundLeg != 'LON' && outBoundLeg != 'PAR' && outBoundLeg != 'GVA' && outBoundLeg != 'FRA' && outBoundLeg != 'GRU' && outBoundLeg != 'PEK' && outBoundLeg != 'YVR' && outBoundLeg != 'OSL' && outBoundLeg != 'ABV' && outBoundLeg != 'GLA' && outBoundLeg != 'BCN' && outBoundLeg != 'DXB' && outBoundLeg != 'CPT' && outBoundLeg != 'TLV' && outBoundLeg != 'CDG' && outBoundLeg != 'HAV' && outBoundLeg != 'LHR' && outBoundLeg != 'DUB' && outBoundLeg != 'SVO' && outBoundLeg != 'BOM' && outBoundLeg != 'FCO' && outBoundLeg != 'ACC' && outBoundLeg != 'KIN' && outBoundLeg != 'YYZ' && outBoundLeg != 'ADD' && outBoundLeg != 'IST' && outBoundLeg != 'NRT' && outBoundLeg != 'BOM' && outBoundLeg != 'BRU' && outBoundLeg != 'SCL' && outBoundLeg != 'ATL' && outBoundLeg != 'CAI' && outBoundLeg != 'JNB' && outBoundLeg != 'LOS' && outBoundLeg != 'CPH' && outBoundLeg != 'NBO' && outBoundLeg != 'SOF' && outBoundLeg != 'MEX' && outBoundLeg != 'NAS' && outBoundLeg != 'ATH' && outBoundLeg != 'AMS' && outBoundLeg != 'SJU' && outBoundLeg != 'ZAG' && outBoundLeg != 'ARN' && outBoundLeg != 'LIS' && outBoundLeg != 'EZE' && OutboundLeg != 'ASU' && outBoundLeg != 'ICN' && outBoundLeg != 'AKL' && outBoundLeg != 'MNL' && outBoundLeg != 'HKG' && outBoundLeg != 'SGN' && outBoundLeg != 'CCS' && outBoundLeg != 'DMM' && outBoundLeg != 'DOH' && outBoundLeg != 'DEL') {
		alert("Inputed Locations not Known");
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
		document.getElementById('dateReturn').value = '';
		document.getElementById('inputClass').value = '';
		document.getElementById('flightOnly').value = '';
		document.getElementById('outBoundLeg').value = '';
		document.getElementById('inBoundLeg').value = '';
		document.getElementById('departureDate').value = '';
		document.getElementById('adult').value = '';
		document.getElementById('children').value = '';
		document.getElementById('infants').value = '';
		// for loop in response object and push all object into result variable
		var result = [];
		var d = [];
		d = response.json;
		for (var i in d) {
			d[i].id = i;
			result.push(d[i]);
		}
		localStorage.setItem("fligtdata", JSON.stringify(result));
		//window.open('./flight.html', '_blank');
		window.location = './flight.html';
	});
});