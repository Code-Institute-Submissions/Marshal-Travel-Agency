// fetch hotel data from localstorage
var result = JSON.parse(localStorage.getItem("hoteldata"));
// for loop objects in result variable and inject into html table
for (i in result) {
	document.getElementById('hotel').insertAdjacentHTML("beforeend", "<tr><td>" + result[i].offers[0].checkInDate + " </td><td>" + result[i].offers[0].checkOutDate + "</td><td>" + result[i].offers[0].price.total + "</td><td>" + result[i].hotel.name + "</td><td>" + result[i].hotel.address.cityName + "</td>" + "<td>" + result[i].hotel.address.lines[0] + "</td><td>" + result[i].hotel.contact.phone + "</td></tr>");
}