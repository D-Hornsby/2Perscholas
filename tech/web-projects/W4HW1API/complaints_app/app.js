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
    $(".button").on("click", (event)=>{
        let userImput = $(".text").val()
        if (userImput == "" ){
            userImput = 10
            }
        let borough = event.target.value.toUpperCase()
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
            type: "GET",
            data:  {
            "$limit" : Number(userImput),
            agency: "NYPD",
            borough: borough,
            resolution_description: "",
            }
            }).then(function(data) {
            alert("Retrieved " + data.length + " records from the dataset!");
            console.log(data);
            for (let index = 0; index <data.length: index++){
                if (data[index].agency == "NYPD" && count < Number(userImput)count ++){
                    console.log(arr[index])
                }
            }
            $("#return").append(data[0].descriptor)
            });
    })

})
console.log(data[index]);
            
//ok i have lots of errors and its 630 in the am...i need a nap 
