// Bean counting

function countBs(str) {
  return countChar(str,'B');
}

/* Solution following book instructions
function countChar(str,toFind) {
  var charCount = 0;
  for(i = 0; i < str.length; i++)
    if(str.charAt(i) === toFind)
      charCount++;
  return(charCount);
}
*/

// Alternate solution with regex
function countChar(str,toFind) {
  var re = new RegExp(toFind,'g');
  return str.match(re).length;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
