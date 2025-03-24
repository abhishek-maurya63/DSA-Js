const prompt = require("prompt-sync")();
/*  print the following pattern
A
AB
ABC
ABCD
ABCDE*/

// for (let i = 0; i <= 5; i++) {
//   let charCode = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(charCode) + " ");
//     charCode++;
//   }
//   console.log();
// }

/*
Q2 print the pattern(inverted right angle triangle)
******
*****
****
***
**
*

*/

// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 5 - i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

/*
Q3: print the mirrored right angle triangle
      *
     **
    ***
   ****
  *****
 ******
 */

// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 5 - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write("*");
//   }

//   console.log();
// }
//Q4: Print V shape
// n = Number(prompt("Enter the number "));
// for (let i = 1; i <= 2*n-1; i++) {
//   for (let j = 1; j <= (2 * n) - 1; j++) {
//     if (i == j || j + i === 2 * n) {
//       process.stdout.write("*");
//     }
//     else process.stdout.write(" ");
//   }
//   console.log();
// }

/* Q5: Print the Floyed triangle
1 
2 3 
4 5 6 
7 8 9 10 
*/

// let count = 1;
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(count + " ");
//     count++;
//   }
//   console.log();
// }

// Q6: Print all the prime numbers from 1 to 100

for (let i = 2; i <= 100; i++) {
  let prime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime == true) console.log(i);
}
