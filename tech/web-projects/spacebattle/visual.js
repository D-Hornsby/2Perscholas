var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

//building the spaceship...what have i gotten into 
var spaceship =
{
    color: "black",
    width: 8, 
    height: 22,
    position:
    {
        x: 0,
        y:0
    },
    angle: 0,
    engineOn: false,
    rotatingLeft: false, 
    rotatingRight: false

}

function drawSpaceship()
{

    //drawing a ship
context.save()
context.beginPath();
//i want it in the cinter of the canvas
context.translate(spaceship.position.x, spaceship.position.y);
context.rotate(spaceship.angle);
context.rect(spaceship.width * -0.5, spaceship.height * -0.5, spaceship.width, spaceship.height);
//context.arc(x, 100, 25, 0, 2*Math.PI);
context.fillStyle= spaceship.color;
context.fill();
context.closePath();
//context.restore();

//ok making fire
if(spaceship.engineOn)
{
    context.beginPath();
    context.moveTo(spaceship.width * -0.5, spaceship.height * 0.5);
    context.lineTo(spaceship.width *0.5, spaceship.height * 0.5);
    context.lineTo(0, spaceship.height * 0.5 + Math.random()*5);
    context.lineTo(spaceship.width * -0.5, spaceship.height *0.5);
    context.closePath();
    context.fullStyle = "orange";
    context.fill();
}
    context.restore();
}
drawSpaceship();
//-------------------------------------------------------------
    //incrementing the x cordinate by one on each frame
    x = x + 1
    if (x > canvas.width) x = 0;
    //if x runs to the end of the page it starts over. may change later


    //totaly off track but really want to see if it will work
requestAnimationFrame(draw);   //this is to poastpone the draw untill a new fram is created instead of over and over when not needed

//-------------------------------------------------------------

  
  //just for fun i wanted to make stars
  var stars=[];
  for (var i = 0; i < 500; i++) {    //im looking to have 500 stars so loop 500 times
    stars[i] = {
      x: Math.random() * canvas.width,    //x position
      y: Math.random() * canvas.height,   //y position
      radius: Math.sqrt(Math.random()*2), //this is the size of the star and i want them to be random between 0 and 1 * 2
      alpha: 1.0,                         //this is for how visible the star is to try to create depth
      decreasing: true,                   //can we make them twinkle
      dRatio: Math.random()*0.05         //how fast do they twinkle
           };
  }
