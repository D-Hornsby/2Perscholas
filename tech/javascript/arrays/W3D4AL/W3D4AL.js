//Create an Animal class.
//The class will have name, age, color, legs, superPower attributes
class Animal {//created animal class with 5 attribute

  constructor(name,age, color, legs, superPower) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
  }
//Create two objects of this class - both with a unique superPower
//create three methods for this class - include one method named userSuperPower()
/*
  userSuperPower(){
    return `${this.name} can ${this.superPower}`;//three method created
  }
  fly(){
   return `fly like a bird`;
  }
  vanishingPower(){
    return `${this.name} vanishes in plain sight`;
}
}
//Create objects for this class
var animal = new Animal ("Dog",3,"pink",4,"fuzzy");
console.log(animal.userSuperPower());
console.log(animal.fly());
console.log(animal.vanishingPower());
console.log(animal);

var animal1 = new Animal ("cat", 4,"polkadot", 7, "talks")
console.log(animal1.userSuperPower());
console.log(animal1.fly());
console.log(animal1.vanishingPower());
console.log(animal1);

var animal2 = new Animal ("horse", 8,"red", 9,"shrinks")
console.log(animal2.userSuperPower());
console.log(animal2.fly());
console.log(animal2.vanishingPower());
console.log(animal2);
*/

//Create a class name User
//This class with have firstName, lastName, department attributes
class User {
  constructor(firstName, lastName, department) {
  //3 attributes
    this.firstName =  firstName;
    this.lastName = lastName;
    this.department = department;
  }
  //method name changeDepartment()
  changeDepartment(){
   return `${this.firstName} ${this.lastName} work at ${this.department} department`
  }
}
//instances for user
//Create three instances of this class
//Change department for two of the instances
//Create three objects for this class
var user = new User ('Dena','Hornsby','Artist');
console.log(user.changeDepartment());
var user1 = new User ('Raini', 'Hornsby','Gamer');
console.log(user1.changeDepartment());
new user2 = new User ('Poppy','Hornsby','Service');
