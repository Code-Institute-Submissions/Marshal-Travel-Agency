/* function for getting document by id used in form input value 
function _(x){
	return document.querySelector(x);
}

        // search hotel and flight button click listener
        _("#sBtn").addEventListener("click", function() {
            //  Book flight form inputs
              var where = _("#where").value;
              var destination = _("#destination").value;
              var departure = _("#departure").value;
              var room = _("#room").value;
              
              console.log('hotel and flight clicked');
  
              var url = 'https://a76dcb3d-31ea-42af-8ff3-5c4a21786b16.mock.pstmn.io/hotelflight';
              
              // get class id for showing loading notification
              document.getElementById('status').style.display = 'inline';
  
              // check if required input is not empty
              if (where == '' || destination == '' || departure == '' || room == '') {
                  alert("All fields required");
                  document.getElementById('status').style.display = 'none';
                  return false;
              }
             
  
              // begin get request
              fetch(url, {
                  method: 'GET',
                  headers: new Headers({
                      'Content-Type': 'application/json',
                      // 'AUTHORIZATION': 'Bearer '+ token
                  })
              }).then(res => res.json()).catch(error => console.log('Error:', error)).then(response => {
                
                document.getElementById('status').style.display = 'none';
               
                console.log(response);
                 
              // add response to result variable
                var result = response;
  
                // inject response data into html table
                document.getElementById('hf').insertAdjacentHTML("beforeend", "<tr><td>" + result.hotel + " </td><td>" + result.address + "</td><td>" + result.phone +  "</td><td>" + result.flightnb +  "</td><td>" + result.carrier + "</td><td>"  + result.terminal + "</td></tr>" )
                    
  
              })
          }); */


// function for getting document by id used in form input value 
function _(x){
	return document.querySelector(x);
}

        // search hotel and flight button click listener
        _("#sBtn").addEventListener("click", function() {
            //  Book flight form inputs
              var where = _("#where").value;
              var destination = _("#destination").value;
              var departure = _("#departure").value;
              var room = _("#room").value;
              
              console.log('hotel and flight clicked');
  
              var url = 'https://a76dcb3d-31ea-42af-8ff3-5c4a21786b16.mock.pstmn.io/hotelflight';
              
              // get class id for showing loading notification
              document.getElementById('status2').style.display = 'inline';
  
              // check if required input is not empty
              if (where == '' || destination == '' || departure == '' || room == '') {
                  alert("All fields required");
                  document.getElementById('status2').style.display = 'none';
                  return false;
              }
              
  
              // begin get request
              fetch(url, {
                  method: 'GET',
                  headers: new Headers({
                      'Content-Type': 'application/json',
                      // 'AUTHORIZATION': 'Bearer '+ token
                  })
              }).then(res => res.json()).catch(error => console.log('Error:', error)).then(response => {
                  //clear form
                where = ''
                destination = ''
                departure = ''
                room = ''
                
                document.getElementById('status2').style.display = 'none';
               
                console.log(response);
                 
              // add response to result variable
                var result = response;

                localStorage.setItem("FandHdata", JSON.stringify(result));
                //window.open('./flightandhotel.html', '_blank');
                window.location = './flightandhotel.html';
                  
  
              })
          });

