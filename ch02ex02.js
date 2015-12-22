//FizzBuzz
for(i = 1; i <= 100; i++) {
  var Ans = "";
  if (i%3 === 0) {
    Ans += "Fizz";
  }
  if (i%5 === 0) {
    Ans += "Buzz";
  }
  console.log(Ans === "" ? i : Ans);
}
