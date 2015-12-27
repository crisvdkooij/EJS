// Mother-child age difference

function average(array) {
  function plus(a, b) { return a + b; }
  return Math.round(array.reduce(plus) / array.length * 10) / 10;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
console.log(byName[byName["Jan Frans van Brussel"].father].born);
console.log(ancestry);
ageDiffMom = ancestry.map(function(name){
  if(Boolean(byName[byName[name.name].mother]) === false){
    return null;
  } else {
  	return byName[name.name].born - byName[byName[name.name].mother].born;
  }
});
console.log(ageDiffMom);
console.log(ageDiffMom.filter(function(obj){
  return obj !== null;
}));

console.log(average(ageDiffMom.filter(function(obj){
  return obj !== null;
})));

// → 31.2
