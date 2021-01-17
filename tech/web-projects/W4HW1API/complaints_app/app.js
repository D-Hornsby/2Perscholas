

console.log("runing js")

// Main function works

$(document).ready(function() {
    $(".button").on("click", (event)=>{
        let userInput = $('input[type="number"]').val();  
     //   let userInput = $(".text").val()
        if (userInput == "" ){
            userInput = 10
            }
        let borough = event.target.value.toUpperCase()
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
            type: "GET",
            data: {
            "$limit" : Number(userInput),
            agency: "NYPD",
            borough: borough,
            }
            }).then(function(data) {
            alert("Retrieved " + data.length + " records from the dataset!");
            console.log(data);

            //has number undefined so changed to line 9
            //then input ..was a syntex error
            //now count is not defined
 //---------------------------------------- -------          
            //need the for loop for the number of complants to print
            for (let index = 0; index < data.length; index++) {
                if (data[index].agency == 'NYPD' && count < Number(userInput)) {
                  count++;
//-------------------------------------------------
// im trying to print the complants

$('ol').append(`
          <li>
          <strong>Borough</strong><span id="borough">${data[index].borough
            }
          </span>
          <br>

          <strong>Descriptor</strong>:<span id="descriptor">${data[index].descriptor
            }
          </span>
          <br>

          <strong>Agency</strong>:<span id="agency">${data[index].agency
            }
            </span>
             <br>
          <div ><strong>Resolution description</strong>:<span><br><section>${data[index].resolution_description
          }
          </section></span></div>
          <input type="submit" value="NYPD Response" onclick="response(${count.toString()})" class="btn btn-warning">
          </li>

          <hr>
          `);

            console.log(data[index]);
//-------------------------------------------------
                }
            }
        })
    })
});

//   $("#return").append(data[0].descriptor)
              
        
//--------------------------------------------------

