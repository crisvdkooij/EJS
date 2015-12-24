// The sum of a range
function range(start, end, step) {
  step = step || 1;
  var numArray = [];
  console.log(i <= end);
  for(i = start; i <= end; i += step)
    numArray.push(i);
  for(i = start; i >= end; i += step)
    numArray.push(i);
  return numArray;
}

function sum(numbers) {
  total = 0;
  for(i = 0; i < numbers.length; i++)
    total += numbers[i];
  return total;
}

/*
// Alternative solution with not yet introduced method Array.reduce()
function sum(numbers) {
  return numbers.reduce(function(previousValue, currentValue) {
  	return previousValue + currentValue;
  });
}
*/

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
