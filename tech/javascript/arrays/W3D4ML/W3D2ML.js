//W3D4ML...the fish
//create a class called fish
/*the 'class' Syntax
class MyClass{
  //class methods
  constructor(){...}
  method1(){...}
  method2(){...}
  method3(){...}
  ...
}
*/
class Fish {
  constructor(stuff){
    this.stuff = stuff;
  }
  //Define a method Swim()
  swim(){
    console.log("To be eaten by some fishes, that were eaten by some fishes and swollowed by a whale.");
    }
  }
  const fish = new Fish(1);
  fish.swim();
  console.log(fish);
  //Create a class Nemo that inherits from Fish
  class Nemo {
    constructor(stuff) {
      this.stuff = stuff;
    }
    swim(){
      console.log("To be eaten by some fishes, that were eaten by some fishes and swollowed by a whale.");
    }
    //Define an attribute color
    color(color){
      this.color = color;
    }
    canItSwim(){
      this.swim = true;
    }
  }
  const nemo = new Nemo ();
    nemo.swim();
    nemo.color ("orange");
    nemo.canItSwim("");
    console.log(nemo);

    //its not working try to fix....update. it needed new infront of my fishes

  /*Create a Nemo object. Can it swim?
Find the difference between abstract class and an interface
Which of the two can have implementation of a method in the class?
*/

/*
Main difference is methods of a Java interface are implicitly abstract
and cannot have implementations. A Java abstract class can have instance
methods that implements a default behavior. ...
An abstract class may contain non-final variables.
Members of a Java interface are public by default
*/
