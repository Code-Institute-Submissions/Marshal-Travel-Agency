// fetch flight data from localstorage
var result = JSON.parse(localStorage.getItem("fligtdata"));
for (i in result) {
	// console.log(result[i].carriers[0].Value);
	document.getElementById('list').insertAdjacentHTML("beforeend", "<tr><td>" + result[1][i].itineraries[0].segments[1].departure.at + " </td><td>" + result[1][i].itineraries[0].segments[1].departure.terminal + "</td><td>" + result[1][i].price.total + "</td><td>" + result[1][i].numberOfBookableSeats + "</td><td>" + result[1][i].itineraries[0].segments[1].number + "</td><td>" + result[1][i].itineraries[0].segments[1].carrierCode + "</td></tr>");
}