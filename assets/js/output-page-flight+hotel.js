// fetch hotel and flight data from localstorage
var result = JSON.parse(localStorage.getItem("FandHdata"));
for (i in result) {
	x = result[i];
	// inject response data into html table
	document.getElementById('hf').insertAdjacentHTML("beforeend", "<tr><td>" + x.hotel + " </td><td>" + x.address + "</td><td>" + x.phone + "</td><td>" + x.flightnb + "</td><td>" + x.carrier + "</td><td>" + x.terminal + "</td><td>" + x.price + "</td></tr>");
}