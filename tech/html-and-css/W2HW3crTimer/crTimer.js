
/* another try for color change*/


let elements = document.getElementsByClassName("circle");
var  elementsLength = elements.length;

var colors = ["#ff33cc", "#cc00cc", "#cc66ff"];
var currentColorIndex = 0;
var colorsLength = colors.length;


function colorChange() {


  if (currentColorIndex > colorsLength) {
    currentColorIndex = 0;
  } else {
    for (i = 0; i < elements.length; i++)
      elements[i].style.backgroundColor = colors[currentColorIndex];
  }
    currentColorIndex++;


    if(currentColorIndex >= colorsLength)
    currentColorIndex = 0;
}








/*
document.getElementByID("div").style.backgroundColor = 'red';
window.setTimeout("yourfunction()",10000);
*/
/*
window.addEventListener('click', element);
var elements = document.getElementsByClassName("grid");
  function elements(){

  for (var i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = ();

    }
  }
*/

//this didnt work


/*
document.grid.addEventListener('click', function(e){



this.style.background = this.style.background == ''? 'purple': 'blue';
setTimeout(function(){
self.style.background = old_bg;
}, 1000);
})
*/
/*
document.getElementByID("div").style.backgroundColor = 'red';
window.setTimeout("yourfunction()",10000); *///nope
