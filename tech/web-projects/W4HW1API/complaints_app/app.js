console.log("runing js")
//parse the json_query result in an ansible loop and create some dynamic variables (or) use them in a task
//use ansible inbuilt features like combine to create a ...


//what Key-value pairs do we need
//borough, descriptor(kind of complaint), agency(NYPD), resolution_description and later 
//location: {type: "Point", cordinates: Array(2)}
//return
// agency: "NYPD"
// borough: "Brooklyn"
// descriptor:""
// resolution_description: ""
  

$(document).ready(function() {
ler request = $.ajax({
url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
type: "GET",
data: {
"$limit" : 10,
// "$$app_token" : "YOURAPPTOKENHERE"
agency: "NYPD"
}
}).done(function(data) {
alert("Retrieved " + data.length + " records from the dataset!");
console.log(data);
});
