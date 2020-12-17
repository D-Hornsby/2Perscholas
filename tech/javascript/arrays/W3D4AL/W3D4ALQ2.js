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
  changeDepartment(newDepartment){
    this.department = newDepartment;
   return `${this.firstName} ${this.lastName} work at ${this.department} department`
   //i had line 13 but changed it in class when he made it clear that we were to change dep
  }
}
//instances for user
//Create three instances of this class
//Change department for two of the instances
//Create three objects for this class
const user = new User ('Dena','Hornsby','Artist');
console.log(user.changeDepartment('Alens'));
const user1 = new User ('Raini', 'Hornsby','Gamer');
console.log(user1.changeDepartment('Alens'));
const user2 = new User ('Poppy','Hornsby','Service');
console.log(user2.changeDepartment('Alens'));
