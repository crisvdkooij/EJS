//Looping a triangle

//Solution creates strings through the join() function. This way you can also control the number of hashes the tree starts of with.
for (i = 2; i < 9; i++) {
  console.log(Array(i).join("#"));
}

//Alternate solution adding hashes to a string
/*
var hashes = ""
for (i = 0; i < 7; i++) {
  console.log(hashes += "#");
}
*/

//Suggested solution from book is more elegant than my alternate solution
/*
for (var line = "#"; line.length < 8; line += "#"){
  console.log(line);
}
/*
