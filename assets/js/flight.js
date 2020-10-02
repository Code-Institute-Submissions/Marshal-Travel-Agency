document.getElementById("search_button").addEventListener
('click', search_button);
document.getElementById("addFlight").addEventListener
('submit', addFlight);

function search_button(){
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01?inboundpartialdate=2019-12-01",{
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "6a06979eecmshb360e05ef335a2fp1faf3fjsn89f3c1a6a34b"
	}
})
    
    .then((response) => response.json())
    .then((data) => {
        let output = "<h2>Flights</h2>";
        data.forEach(function(flight){
            output += `
                <div>
                    <h3>${flight.Quotes}</h3>
                    <p>${flight.MiniPrice}</p>
                    <p>${flight.Direct}</p>
                    <p>${flight.OutboundLeg}</p>
                    <p>${flight.DepartureDate}</p>
                    <p>${flight.InboundLeg}</p>
                    <p>${flight.DepartureDate}</p>
                    <p>${flight.QuoteDateTime}</p>
                    <h3>${flight.places}</h3>
                    <p>${flight.IataCode}</p>
                    <p>${flight.Name}</p>
                    <p>${flight.Type}</p>
                    <p>${flight.SkyscannerCode}</p>
                    <p>${flight.CityName}</p>
                    <p>${flight.CountryName}</p>
                    <h3>${flight.Carriers}</h3>
                    <p>${flight.Name}</p>
                     <h3>${flight.Currencies}</h3>
                    <p>${flight.Name}</p>
                </div>

            `;
        });
         document.getElementById("output").innerHTML = output;
    })
}

function addFlight(e){
    e.preventDefault();

    let OutboundLeg = document.getElementById("Outboundleg").value;
    let InboundLeg = document.getElementById("InboundLeg").value;
    let DepartureDate = document.getElementById("DepartureDate").value;

    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01?inboundpartialdate=2019-12-01",{
        "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		    "x-rapidapi-key": "6a06979eecmshb360e05ef335a2fp1faf3fjsn89f3c1a6a34b"
	    },
        body:JSON.stringify({OutboundLeg:OutboundLeg, InboundLeg:InboundLeg, DepartureDate:DepartureDate})
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}
        
 
       


