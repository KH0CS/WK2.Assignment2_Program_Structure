// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #


let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if (( x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

/* This code was used in the book I just don't understand how it works fully. 


Line 18 for loop giving y a value of 0, y is less than 8 (size), y goes up by 1 (++)
line 19 giving x a value of 0, x is less than 8 (size), x goes up by 1 (++)
line 20 if x + y is divisible by 2 with no remainder 
Line 21 the board leaves a space hence the ""
line 22 else so if that does not apply or not divisible by 2 
Line 23 is if it is not divisible by 2 then we add a "#"
Line 26 is separating each line with a new line "\n"
*/
console.log(board);
