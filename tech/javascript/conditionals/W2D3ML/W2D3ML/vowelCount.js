

function vowel_count(str1){
    var vowel_list = 'AaEeIiOoUu';
    var vcount = 0;
  for ( n = 0; n < str1.length; n++){
    if (vowel_list.indexOf(str1[n]) !== -1){
      { vcount += 1; }
    }
  }
  return vcount;
}
console.log(vowel_count("My dog has big teeth."))
