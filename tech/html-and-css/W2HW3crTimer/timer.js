// //I have a weard thing like a squiggle on ln 99 you cant see it in adom but you can in Vs
// //since the squggle appeared i cant make my code work and i cant get rid of the squiggle
// //what in the world is it and how do i get rid of it
// //line 34 console.log not working
// // when the document is loaded, trigger the "documentLoaded" function
// window.addEventListener('DOMContentLoaded', documentLoaded, false);

// var startTime;
// var limite;
// var temporizador;

// function documentLoaded() {
//   "use strict";

//   // listen for mouse clicks on the button
//  //what was given
//  //document.getElementById("btnStart").addEventListener("click", botaoClicked, false);
// //changing for #4. the txtTempo us used, keydown fires with button press. changed the id to add listiner
// document.getElementById("txtTempo").addEventListener("keydown", startTimer, false);


// //not the timer dont work
// //this is new an broke it. i couldnt get it to work and had help but still dont work
// //also after adding this is when i got the squiggle
// //function to add listener using txtTempo, keydown function fired when key pressed

// console.log("line 27");
// //line 27 and 39 are working but not 30 and now its broken
// //Ive changed about everything to what others have and still not working
// function startTimer(){
//   console.log("is the timer working?");
//   txtTempo.addEventListener("keydown", function keydown(event){
//     if(event.keyCode === 13){
//       console.log("Is the 13 working for enter?")
//       txtTempo1.focus(); //was told i needed this but not sure why yet
//       txtTempo.removeEventListener('keydown', keydown);

//       }
//     });

//     //need to add txtTempo1
//     txtTempo1.addEventListener("keydown", function keydown(event){
//   if(event.keyCode === 13){

//     txtTempo1.removeEventListener('keydown', keydown);

//     }
//   });
// }

// console.log("after added function test")

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function startClock(userLimit) {
  "use strict";
  startTime = new Date();
  let [min,sec] = userLimit.split(':');
  limite = parseInt(min)*60 + parseInt(sec);
  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}
//------------------------
function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
}
  // show the elapsed time
  //document.getElementById("clock").innerHTML = minutos + ":" + segundos;
  document.querySelector("#clock span").innerHTML = minutos + ":" + segundos;
  //check if we are above the time limit and set the color of the timer accordingly
  if (minutos*60 + segundos >= limite) {
    document.getElementById("clock").classList.add("red");
  } else if () {
    document.getElementById("clock").classList.remove("blue");
  } else {

    document.getElementById("clock").classList.add("blue");

 document.getElementById("clock").classList.remove("red");
  }
}

