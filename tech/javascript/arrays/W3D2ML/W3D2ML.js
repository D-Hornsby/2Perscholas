//W3D2ML 1. array that goes to 50
/*
let numsArray = [];
for (let i = 0; i <= 50; i++){
   numsArray.push (i);
   console.log(numsArray)
}
*/

//number 2. adding to a list
/*
let groceryList = [ "cool ranch doritos","kings hawaiian sweet bread","peanut butter oreos","fruit loops cereal"];
let total = groceryList.push ("Hendricks gin");
console.log (groceryList);
*/

//number 3. reverse string. i tryed to join but that part didnt work. im going to leave it to try to see what happend later.
/*
var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
var reverse = yoda.reverse().join("");
console.log(yoda)
*/
//number 4...woops...popped..can i reverse pop
/*
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = waitList.pop();
console.log(waitList);
console.log(nowServing);
*/
//well ive tryid it like they did in class and added to it to get it to work but it dont want to. it keeps giving me a number

/*
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];

  for(var i = 0; i < waitList.length; i++){
    //if(waitList [i] == waitList)
    console.log("nowServing" + waitList);
  }


  // solution 1 ------------------------------------------
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";
for (var i = 0; i < waitList.length; i++) {

      nowServing = waitList[i];
      console.log("Now serving =  " + nowServing);


// solutiion 2 ------------------------------------------
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";
waitList = waitList.reverse();
for (var i = 0; i < 5; i++) {
           nowServing = waitList.pop();
           console.log(nowServing);
           console.log(waitList);
}

console.log("done");

//  solution 3 -----------------------------------------

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";

for (var i = 0; i < 5; i++) {

     nowServing = waitList.shift(); //removes first elements of array
     console.log(nowServing); //in for loop each time will print person who is nowServing
     console.log(waitList);  //remaining waitlist will print without person who is serving. length-1;

}
console.log("Waiting List is Empty");

//
*/

//im not sure whats happend. now even codes that worked up top nolonger work. i just get a number
/*
var shoe = ["just", "do", "it"];
var shoeString = "";
  for (var i = 0; i <shoe.length; i++){
    shoeString += shoe[i];
    shoeString += "";
  }
*/
  //atempt 2
var shoe = ["just", "do", "it"];
var shoeString  = shoe.toString();

  console.log(shoeString);

  /*
  internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module '/Users/denahornsby/Desktop/2Perscholas/W3D2ML.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js
:72:12)
    at internal/main/run_main_module.js:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
*/
//Ugggg why
