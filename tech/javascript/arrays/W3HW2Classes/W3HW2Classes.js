//Create shaped objects

//Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
//Write a function called circle_area that returns the area of the object.
//Write a function total_sides that returns the number of sides of the object.


// class Circle {
//   constructor(radious) {
//     this.pi = 3.14;
//     this.radious = radious;
//   }
//   //get syntax binds an object to a function
//     return this.calcArea();
//   }
//   calcArea(){
//     return this.pi * this.radious * this.radious;
//   }
//   total_sides(sides){ /
//     this.side = sides;
//   }


//they dont have sides so this is weard

// const circle = new Circle(10);
//
//
// console.log("Area of circle = " + circle.area);
// circle.total_sides('infinite');
// console.log(circle);
//
// const circle1 = new Circle (20);
// console.log("Area of circle1 = "+ circle1.area);
// circle.total_sides('infinite');
// console.log(circle1);



//Write a function called rectangle_area that returns the area of the given object.
//Write a function total_sides that returns the number of sides of the object.
//create class with attributes and instantiate


// class Rectangle{
//   constructor(length,width){
//     this.length = length;
//     this.width = width;
//   }
//   rectangle_area(){
//     console.log("Area of a rectangle: " + this.length * this.width);
//   }
//   total_sides(){
//     console.log("Sides of rectangle = 4");
//   }
// }
//
// const rectangle1 = new Rectangle(2,10);
// rectangle1.rectangle_area();
// rectangle1.total_sides();
//
// const rectangle2 = new Rectangle(15,30);
// rectangle2.rectangle_area();
// rectangle2.total_sides();

//redo 1/12---try this an see if it works
<!Doctype html>
<html>
<body>

<p id = 'a'></p>
<p id = 'p'></p>
<p id = 'v'></p>

<script>
function myFunction (){

var length = prompt (''); //L in integer
var width = prompt ('');  //W in integer
var dept = prompt ('');  //depth of your rectangle1

var area = length * width;
var perimeter = (2 * width) + (2 * length);
var volume = length * width * depth;

document.getElementById('a').innerTHML=
      'Area of rectangle:' + area;
document.getElementById('p').innerTHML=
      'Perimeter of retangle:' + perimeter;
document.getElementById('v').innerTHML=
      'Volume of rectangle:' + volume;
    }
</script>

    <button onclick = 'myFunction()'>Calculate</button>

</script>
</body>
</html>



//refacter for sq when you get it right



//Define a new class called Square with appropriate attributes and instantiate a few Square objects.
//Write a function called square_area that returns the area of the given object.
//Write a function total_sides that returns the number of sides of the object.


// class Square {
//  constructor(height) {
//    this.height = height;
//  }
//  get area(){
//    return this.calcArea();
//  }
//  calcArea(){
//    return this.height * this.height;
//  }
//  numberOfsides(sides){
//    this.sides = sides;
//  }
// }
// var square = new Square (5)
// console.log("Area of square = " + square.area);
// square.numberOfsides(4);
// console.log(square);
//
// var square1 = new Square (52)
// console.log("Area of square1 = " + square1.area);
// square1.numberOfsides(4);
// console.log(square1);

//i need to go over this. i dont think my node was happy
