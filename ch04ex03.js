// Your code here.

function arrayToList(arr) {
  if(arr.length === 0){
    return(null);
  } else {
  	element = arr.shift();
    console.log(arr);
  	return({value: element, rest: arrayToList(arr)});
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
