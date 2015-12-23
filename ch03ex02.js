// Recursion

function isEven(a){
  if(a < 0)
    a *= -1;
  if(a === 0 || a === 1)
    return a === 0 ? true : false;
  else
    return isEven(a-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
 console.log(isEven(-1));
// → ??
