var btn = document.getElementById("search_button");

btn.addEventListener('click', display_data);

window.addEventListener('load', display_options);

function clean_date(dirty_date) {
 return /.*T(.*)Z/g.exec(dirty_date)[1];
}

// 1 - Create a function to display the available locations
function display_options() {
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=%3Crequired%3E",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "6a06979eecmshb360e05ef335a2fp1faf3fjsn89f3c1a6a34b"
	}
}

$.ajax(settings).done(function (response) {
	 $('.contracts').append('<h3></h3>');

     for (var i = 0; i < response.length; i++) {
       var html = '<span class="badge badge-info">' + response[i].name + '</span>';

       $('.contracts').append(html);
     }
  });
}


