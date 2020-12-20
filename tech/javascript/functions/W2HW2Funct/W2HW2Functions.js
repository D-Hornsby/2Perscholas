//1. find the greater of the 2 numbers

function max(a, b) {
  if (a > b) { 
    return a;
   }
    else {  
      return b; 
    } 
   }   

  console.log (max ( 2, 4 ));   //call the larger number

//not returning a number

  //2.find the greater of 3 numbers
/*
  function max (a, b, c) {
   if ((a > b) && (a > c)){ 
      return a;  
     }
      else if ((b > a) && (b > c)){
        return b; 
      } 
     else {
        return c;
      }
    }   
//    return larger
    console.log (max (2, 4, 8));   //call the larger number
*/

    //3. is it a vowel
//    function vawelOrNo (x){
/*
      if (x == "a" || x == "A"){
        return true;
      }
      else if (x == "e" || x == "E"){
        return true;
      }
      else if (x == "i" || x == "I"){
        return true
      }
      else if (x == "o" || x == "O"){
        return true;
      }
      else if (x == "u" || x == "U"){
        return true;
      }
      else {
        return false;
      }
    }
    //didnt know how to end this
    //had to put vowels in "" and added caps

      console.log (vawelOrNo("b"));
*/

//4. function sumArray. Adding numbers.
/*
function sumArray(n){
  var sum = 0;
    for (val i = 0; i < n .length; i++){
      sum += n[i];
    }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]))
*/
//not working, seams simple not sure what i missed

//4. function muliplyArray
/*
function multiplyArray (n){
    var multiplies = 1;
      for (var i = 0; i < n.length; i++){
        multiplies * n [i];
      }
      return multiplies;
}
console.log(multiplyArray([1, 2, 3,4]))*/
//nope...gives me 1 so its not looping?

//5. javaScript function.length
/*
function func1() {
}
function func2() {
}
console.log(func1.length);
console.log(func2.length);
*/
//not totaly understanding this. look up. did not get the output i wanted.
// works now

//6. different reverseStrings
/*
function reverseString (str){
  return str;
}
reverseString("hello");
*/
//my console log it wrong
//took out console log still not printing anything

//trying an example
//function reverseString(str){
  //using split()to return a new sumArray
//  var splitString = str.split("")
  //var splitstring = "hello".split("");
  //["h", "e",]
//}

//funcrion adder(base /*, n2,...*/){
//  base = Number(base);
  //for (var i = 1; i< arguments.length; i++){
//    base += Numbers(arguments[i]);
//  return base;
//}
/* 5.
function func1(){}
function func2(){}
console.log(func1.length);
concole.log(func2.length);  */

//this should of printed. i did it excally. not sure why i cant printed

//6
/*
var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >=0; i--){
    revArr.push(arr[i]);
  }
  return revArr.join('boo');
};  */

//7.longest word
/*
function findLongestWord(arr){
  longest = 0;
  for (var i = 0; i< arr.length; i++){
    if (arr[i].length >longest){
      longest = arr[i].length;
    }
  }
  return longest;
}
*/

//8.
/*function filterLongWords (arr, num){
  newArr = [];
  for (var i=0; i< arr.length; i++){
    if (arr[i].length>num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
*/

///still need to do bonus
//not liking doing the code this way. seen them do it in class but i like so each has its own file.
//will go threw and redo after i get ahead
