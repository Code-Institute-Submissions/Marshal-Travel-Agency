/* function for getting document by id used in form input value 
function _(x){
	return document.querySelector(x);
}


    // search hotel button click listener
    _("#hBtn").addEventListener("click", function() {
        //  Book hotel form inputs
          var location = _("#loc").value;
         
          
          console.log(location)

          // get API access token from localstorag
          var token = localStorage.getItem("token");

          var url = 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode='+ location;
         
          // get class id for showing loading notification
          document.getElementById('status').style.display = 'inline';

          // check if required input is not empty
          if (location == '' ) {
              
            alert("All fields required");
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
            d= response.data;
            for (var i in d) {
            d[i].id = i;
             result.push(d[i]);
              // console.log(d[i]);
            }
              
          // for loop objects in result variable and inject into html table
            for (i in result){
            
              document.getElementById('hotel').insertAdjacentHTML("beforeend", "<tr><td>" + result[i].offers[0].checkInDate + " </td><td>" + result[i].offers[0].checkOutDate + "</td><td>" + result[i].offers[0].price.total + "</td><td>"  + result[i].hotel.name + "</td><td>" +  result[i].hotel.address.cityName + "</td>"  + "<td>" + result[i].hotel.address.lines[0] + "</td><td>"   + result[i].hotel.contact.phone + "</td></tr>" )
            
          }

        })
      });
      */

// function for getting document by id used in form input value 
function _(x){
	return document.querySelector(x);
}


    // search hotel button click listener
    _("#hBtn").addEventListener("click", function() {
        //  Book hotel form inputs
          var location = _("#loc").value;
          var checkin = _("#checkin").value;
          var checkout = _("#checkout").value;
          var rooms = _("#rooms").value;
          

          console.log(location);
          console.log('button clicked')

          // get API access token from localstorag
          var token = localStorage.getItem("token");

          var url = 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode='+ location;
         
          // get class id for showing loading notification
          document.getElementById('status1').style.display = 'inline';

          // check if required input is not empty
          if (location == '' || checkin == '' || checkout == '' || rooms == '' ) {
              
            alert("All fields required");
            document.getElementById('status1').style.display = 'none';
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
              //clear form
            location = ''
            checkin = ''
            checkout = ''
            rooms = ''
            children = ''
            inputStar = ''

            document.getElementById('status1').style.display = 'none';

            console.log(response);
             
          // for loop in response object and push all object into result variable
            var result = [];
            var d = [];
            d= response.data;
            for (var i in d) {
            d[i].id = i;
             result.push(d[i]);
              // console.log(d[i]);
            }
            
            // store hotel data in local storage
            localStorage.setItem("hoteldata", JSON.stringify(result));
            //window.open('./hotel.html', '_blank');
            window.location = './hotel.html';
          
        })
      });



