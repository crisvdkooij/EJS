//Chess board
//This solution uses only 1 counter instead of the suggested two. It uses a variable offset the grid each line

var size = 8;
var grid = "";
var offset = 0;
for (i = 0; i <= size*size; i++) {
  if (i % 2 === 0+offset) {
  	grid += " ";
  } else {
    grid += "#";
  }
  if (i % size === 0) {
    grid += "\n";
    if (offset === 0) {
      offset = 1
    } else {
      offset = 0
    }
  }
}
console.log(grid);
