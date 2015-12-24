// Reversing an array
/*
function reverseArray(arr) {
  revArr = [];
  for(i = arr.length - 1; i >= 0; i--)
    revArr.push(arr[i]);
  return(revArr);
}
*/

function reverseArray(arr) {
  revArr = [];
  for(i = 0; i < arr.length; i++)
    revArr.unshift(arr[i]);
  return(revArr);
}

function reverseArrayInPlace(arr) {
  for(i = 0; i < Math.floor(arr.length/2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
