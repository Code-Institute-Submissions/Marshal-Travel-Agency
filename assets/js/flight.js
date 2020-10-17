// function for getting document by id used in form input value 
function _(x){
	return document.querySelector(x);
}

// search flight button click listener
_("#fBtn").addEventListener("click", function() {
    //  Book flight form inputs
      var datereturn = _("#datereturn").value;
      var oneway = _("#oneway").value;
      var multicity = _("#multicity").value;
      var inputClass = _("#inputClass").value;
      var flightonly = _("#flightonly").value;
      var OutboundLeg = _("#OutboundLeg").value;
      var InboundLeg = _("#InboundLeg").value;
      var DepartureDate = _("#DepartureDate").value;
      var adult = _("#adult").value;
      var adultValue = parseInt(adult);
      var children = _("#children").value;
      var infants = _("#infants").value;
      
      console.log(DepartureDate);
      console.log('button clicked')

      // get API access token from localstorag
      var token = localStorage.getItem("token");

      var url = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode='+OutboundLeg+'&destinationLocationCode='+InboundLeg+'&departureDate='+DepartureDate+'&returnDate='+datereturn+'&adults='+adultValue+'&max=5';
      
      // get class id for showing loading notification
      document.getElementById('status').style.display = 'inline';
     

      // check if required input is not empty
      if (InboundLeg == '' || OutboundLeg == '' || DepartureDate == '') {
          // _('.status').innerHTML = 'Phone and Pin are required';
          alert("All fields required");
          // disable loading
          document.getElementById('status').style.display = 'none';
         
          return false;
      }
    
      
      // begin get request
      fetch(url, {
          method: 'GET',
          headers: new Headers({
              'Content-Type': 'application/json',
              'AUTHORIZATION': 'Bearer '+ token
          })
      }).then(res => res.json()).catch(error => console.log('Error:', error)).then(response => {
       
        document.getElementById('status').style.display = 'none';
        console.log(response);
         
      // for loop in response object and push all object into result variable
        var result = [];
        var d = [];
        d= response;
        for (var i in d) {
        d[i].id = i;
         result.push(d[i]);
          // console.log(d[i]);
        }
          
      // for loop objects in result variable and inject into html table
        for (i in result){
          // console.log(result[i].carriers[0].Value);
          document.getElementById('list').insertAdjacentHTML("beforeend", "<tr><td>" + result[1][i].itineraries[0].segments[1].departure.at + " </td><td>" + result[1][i].itineraries[0].segments[1].departure.terminal + "</td><td>" + result[1][i].price.total+  "</td><td>" + result[1][i].numberOfBookableSeats +  "</td><td>" + result[1][i].itineraries[0].segments[1].number + "</td><td>"  + result[1][i].itineraries[0].segments[1].carrierCode + "</td></tr>" )
          
        }
        

      })
  });