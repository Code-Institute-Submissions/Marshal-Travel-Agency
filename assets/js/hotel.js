/*document.getElementById("search_hotel").addEventListener
('click', search_hotel);
document.getElementById("addHotel").addEventListener
('submit', addHotel);

function search_hotel(){
    fetch("https://hotels4.p.rapidapi.com/properties/get-details?locale=en_US&currency=USD&checkOut=2020-01-15&adults1=1&checkIn=2020-01-08&id=424023",{
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "6a06979eecmshb360e05ef335a2fp1faf3fjsn89f3c1a6a34b"
	}
})
    
    .then((res) => res.json())
    .then((data) => {
        let result = "<h2>Hotels</h2>";
        data.forEach(function(hotel){
            result += `
                <div>
                    <h3>${hotel.result}</h3>
                    <p>${hotel.data.body}</p>
                    <p>${hotel.body}</p>
                    <p>${data.transportation}</p>
                    <p>${data.neighborhood}</p>
                </div>

            `;
        });
         document.getElementById("result").innerHTML = result;
    })
}

function addHotel(e){
    e.preventDefault();

    let result = document.getElementById("result").value;
    let data = document.getElementById("data").value;
    let body = document.getElementById("body").value;

    fetch("https://hotels4.p.rapidapi.com/properties/get-details?locale=en_US&currency=USD&checkOut=2020-01-15&adults1=1&checkIn=2020-01-08&id=424023",{
        "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "hotels4.p.rapidapi.com",
		    "x-rapidapi-key": "6a06979eecmshb360e05ef335a2fp1faf3fjsn89f3c1a6a34b"
	    },
        body:JSON.stringify({result:result, data:data, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}
*/
        
 
       

document.getElementById("search_hotel").addEventListener
('click', search_hotel);
document.getElementById("addHotel").addEventListener
('submit', addHotel);

function search_hotel(){
    fetch("user.json")
    
    .then((res) => res.json())
    .then((data) => {
        let result = "<h2>Hotels</h2>";
        console.log(data);
        data.forEach(function(hotel){
            result += `
                <ul>
                    <li>ID: ${hotel.id}</li>
                    <li>Name: ${hotel.name}</li>
                    <li>Email: ${hotel.email}</li>
                    
                </ul>

            `;
        });
        document.getElementById("result").innerHTML = result;
    })
}


    