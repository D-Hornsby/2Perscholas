
console.log("boo");
/*window.addEventListener('DOMContentLoaded',
documentLoaded, false);*/
documentLoaded();
    var startTime;
    var limite;
    var tempor;

  function documentLoaded(){
    "use strict";

console.log("document");
    document.getElementById("clock").addEventListener(
      "click", Clicked);

  }
  function Clicked(evt){
    "use strict";
    var input = this.querySelector("input");
    var label = this.querySelector("div");

    input.value = 10;

    startTime = new Date();

  input.addEventListener("keydown", function keydown(evt){
    if (evt.keycode ===13) {
      limit =parseInt(input.value);
      label.innerHTML = input.value;
      label.classList.remove("hide");
      input.classList.add("hide");

      clearInterval(tempor);
  tempor = setInterval(updateTime, 1000);
      }
    });
  }

function updateTime() {
  "use strict";

  var currentTime = new Date();

  var elapsed = (currentTime.getTime()-
startTime.getTime()) / 1000;

var minutes = Math.floor(elapsed / 60);
var seonds = Math.floor(elapsed % 60);

//pad with 00
if (minutes < 10) {
  minutes = "0" + minutes;
}
if(seconds < 10) {
  seconds = "0" + seconds;
}
//show time passed
document.getElementById("clock").formattedTime
minutes + ":" + seconds;
//check if we are above the time limit and set the color of crTimer
  if (minutes >= limit) {
    document.getElementById("clock").className = "red";
  } else{
    document.getElementById("clock").className = "blue";

  }
}
