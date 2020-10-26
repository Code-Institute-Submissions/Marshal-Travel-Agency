/* function for getting document by id used in form input value 
function _(x){
	return document.querySelector(x);
}

// car hire button click listener
_("#cBtn").addEventListener("click", function() {
    //  Book flight form inputs
      var pickloc = _("#pickloc").value;
      var hiredate = _("#hiredate").value;
      var picktime = _("#picktime").value;
      var dropoff = _("#dropoff").value;
      var droptime = _("#droptime").value;
      
      console.log('car hire clicked');

      var url = 'https://a76dcb3d-31ea-42af-8ff3-5c4a21786b16.mock.pstmn.io/carhire';
      
       // get class id for showing loading notification
       document.getElementById('status').style.display = 'inline';

      // check if required input is not empty
      if (pickloc == '' || hiredate == '' || picktime == '' || dropoff == '' || droptime == '') {
        
        alert("All fields required");
        document.getElementById('status').style.display = 'none';
        return false;
      }
      // show loading notification while making request
      _('.status').innerHTML = 'Please wait...';
      

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
        //document.getElementById('ch').insertAdjacentHTML("beforeend", "<tr><td>" + result.pickup + " </td><td>" + result.Location + "</td><td>" + result.car +  "</td><td>" + result.type +  "</td>"  + "<td>"  + result.time + "</td></tr>" )
         
        localStorage.setItem("car", JSON.stringify(result));
        window.open('./car.html', '_blank');
        window.location = './car.html';
       

      })
  });

*/


 
  // function for getting document by id used in form input value 
function _(x) {
	return document.querySelector(x);
}
// car hire button click listener
_("#cBtn").addEventListener("click", function () {
	//  Book flight form inputs
	var pickloc = _("#pickloc").value;
	var hiredate = _("#hiredate").value;
	var picktime = _("#picktime").value;
	var dropoff = _("#dropoff").value;
	var droptime = _("#droptime").value;
	console.log('car hire clicked');
	var url = 'https://a76dcb3d-31ea-42af-8ff3-5c4a21786b16.mock.pstmn.io/carhire';
	// get class id for showing loading notification
	document.getElementById('status3').style.display = 'inline';
	// check if required input is not empty
	if (pickloc == '' || hiredate == '' || picktime == '' || dropoff == '' || droptime == '') {
		alert("All fields required");
		document.getElementById('status3').style.display = 'none';
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
		pickloc = '';
		hiredate = '';
		picktime = '';
		dropoff = '';
		droptime = '';
		document.getElementById('status3').style.display = 'none';
		console.log(response);
		// add response to result variable
		var result = response;
		localStorage.setItem("car", JSON.stringify(result));
		//window.open('./car.html', '_blank');
		window.location = './car.html';
	})
});