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
*/

//im not sure whats happend. now even codes that worked up top nolonger work. i just get a number
var shoe = ["just", "do", "it"];
var shoeString = "";
  for (var i = 0; i <shoe.length; i++){
    shoeString += shoe[i];
    shoeString += "";
  }
