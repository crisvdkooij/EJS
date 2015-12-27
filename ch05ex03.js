// Historical life expectancy

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function avgInCentury (arr,century){
	return average(arr.filter(function(person) {
		return Math.ceil(person.died / 100) === century;
	}));
}
console.log(avgInCentury(ancestry,17));

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
