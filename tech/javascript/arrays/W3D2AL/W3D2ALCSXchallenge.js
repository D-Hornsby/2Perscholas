//CSX challenge using objects lterating with for...in ask to fill array with
// all numbers from the checkObj object
//if they are greater than or equal to 2.


const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];

for (const property in checkObj){
  if(checkObj[property] >= 2){
    objToArray.push(checkObj[property])
  }
}
console.log(objToArray);




//CSX challenge Objects -lterating with a for loop still not working
//says my objToArray is not defined...ive spent to much time here and need to move on

/*
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
*/
// ADD CODE HERE

//atempt 1
/*
for (let i = 0; i < objToArray.length; i+=1) {
 if(objToArray[i] % 6 === 0) {
   divBy6 = true;
  // console.log(true)
 } else {
   console.log(false)
 }
}
*/
//try this in CSX------this works on a test page but for somereason not in here
/*
const objToArray = Object.values(checkObj);// assign values in objToArray with Object.values
for(var i=0; i <objToArray.length; i++) // create for loop with lenght of array if number is divisible 6 which remainder must be 0
  {
    if (objToArray [i] % 6 == 0)
      divBy6 = true;
  }
console.log(objToArray);
*/
