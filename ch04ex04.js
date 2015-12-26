// Deep comparison

function deepEqual(alpha, beta){
  if(alpha === null || beta === null || typeof alpha !== "object" && typeof beta !== "object"){
    return alpha === beta;
    
  } else {
    var propsInAlpha = 0, propsInBeta = 0;
    
    for(prop in beta)
      propsInBeta++;
    
    for(prop in alpha){
      propsInAlpha++;
      if(deepEqual(alpha[prop],beta[prop]) === false)
        return false;
    }
    
    return propsInBeta === propsInAlpha;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
