// fetch car data from localstorage
var result = JSON.parse(localStorage.getItem("car"));
// for loop objects in result variable and inject into html table
for (i in result) {
	x = result[i];
	// inject response data into html table
	document.getElementById('ch').insertAdjacentHTML("beforeend", "<tr><td>" + x.pickup + " </td><td>" + x.Location + "</td><td>" + x.car + "</td><td>" + x.type + "</td>" + "<td>" + x.time + "</td><td>" + x.drop + "</td></tr>");
}