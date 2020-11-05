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
 	var datereturn = _("#datereturn").value;
 	var inputClass = _("#inputClass").value;
 	var flightonly = _("#flightonly").value;
 	var OutboundLeg = _("#OutboundLeg").value;
 	var InboundLeg = _("#InboundLeg").value;
 	var DepartureDate = _("#DepartureDate").value;
 	var adult = _("#adult").value;
 	var adultValue = parseInt(adult);
 	var children = _("#children").value;
 	var infants = _("#infants").value;
 	// get API access token from localstorag
 	var token = localStorage.getItem("token");
 	var url = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=' + OutboundLeg + '&destinationLocationCode=' + InboundLeg + '&departureDate=' + DepartureDate + '&returnDate=' + datereturn + '&adults=' + adultValue + '&max=5';
 	// get class id for showing loading notification
 	document.getElementById('status').style.display = 'inline';
 	// check if required input is not empty
 	if (InboundLeg == '' || OutboundLeg == '' || DepartureDate == '' || datereturn == '' || adult == '' || children == '' || infants == '') {
 		alert("All fields are required");
 		// disable loading
 		document.getElementById('status').style.display = 'none';
 		return false;
 	} else if (document.getElementById('InboundLeg').value.length > 3 || document.getElementById('InboundLeg').value.length < 3) {
 		alert("Please Enter IATA 3-letter codes for Airports");
 		// disable loading
 		document.getElementById('status').style.display = 'none';
 		return false;
 	} else if (document.getElementById('OutboundLeg').value.length > 3 || document.getElementById('OutboundLeg').value.length < 3) {
 		alert("Please Enter Location code in 3 words");
 		// disable loading
 		document.getElementById('status').style.display = 'none';
 		return false;
 	}
 	// check from where input location code
 	else if (InboundLeg != 'SYD' && InboundLeg != 'BKK' && InboundLeg != 'JFK' && InboundLeg != 'LON' && InboundLeg != 'PAR' && InboundLeg != 'GVA' && InboundLeg != 'FRA' && InboundLeg != 'GRU' && InboundLeg != 'PEK' && InboundLeg != 'YVR' && InboundLeg != 'OSL' && InboundLeg != 'ABV' && InboundLeg != 'GLA' && InboundLeg != 'BCN' && InboundLeg != 'DXB' && InboundLeg != 'CPT' && InboundLeg != 'TLV' && InboundLeg != 'CDG' && InboundLeg != 'HAV' && InboundLeg != 'LHR' && InboundLeg != 'DUB' && InboundLeg != 'SVO') {
 		alert("Inputed Locations not Known");
 		document.getElementById('status').style.display = 'none';
 		return false;
 		// check to where input location code
 	} else if (OutboundLeg != 'SYD' && OutboundLeg != 'BKK' && OutboundLeg != 'JFK' && OutboundLeg != 'LON' && OutboundLeg != 'PAR' && OutboundLeg != 'GVA' && OutboundLeg != 'FRA' && OutboundLeg != 'GRU' && OutboundLeg != 'PEK' && OutboundLeg != 'YVR' && OutboundLeg != 'OSL' && OutboundLeg != 'ABV' && OutboundLeg != 'GLA' && OutboundLeg != 'BCN' && OutboundLeg != 'DXB' && OutboundLeg != 'CPT' && OutboundLeg != 'TLV' && OutboundLeg != 'CDG' && OutboundLeg != 'HAV' && OutboundLeg != 'LHR' && OutboundLeg != 'DUB' && OutboundLeg != 'SVO') {
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
 		document.getElementById('datereturn').value = '';
 		document.getElementById('inputClass').value = '';
 		document.getElementById('flightonly').value = '';
 		document.getElementById('OutboundLeg').value = '';
 		document.getElementById('datereturn').value = '';
 		document.getElementById('InboundLeg').value = '';
 		document.getElementById('DepartureDate').value = '';
 		document.getElementById('adult').value = '';
 		document.getElementById('children').value = '';
 		document.getElementById('infants').value = '';
 		console.log(response);
 		console.log(response.json);
 		// for loop in response object and push all object into result variable
 		var result = [];
 		var d = [];
 		d = response.json;
 		for (var i in d) {
 			d[i].id = i;
 			result.push(d[i]);
 			// console.log(d[i]);
 		};
 		localStorage.setItem("fligtdata", JSON.stringify(result));
 		//window.open('./flight.html', '_blank');
         window.location = './flight.html';
    
 	})
 });