
//find the greater of the 2 numbers
/*
function max(a, b) {
   if (a > b) { 
    return a;  
   }
    else {  
      return b; 
    } 
  }   

  console.log (max ( 2, 4 ));   //call the larger number
*/

//2.find the greater of 3 numbers

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
  //return larger
  console.log (max (2, 4, 8));   //call the larger number
