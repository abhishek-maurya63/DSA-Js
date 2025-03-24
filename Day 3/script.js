// console.log(Math.floor(Math.random() * 9000 + 1000));

// let a = Number(prompt("Enter A"));
// let b = Number(prompt("Enter B"));
// let c = Number(prompt("Enter C"));

// if (a + b <= c || b + c <= a || a + c <= b) {
//   console.log("Not Possible");
// } else {
//   let s = (a + b + c) / 2;
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   console.log(area);
// }

// console.log(Math.trunc(2334.495749, 6));

// let P = 90;
// let r = 4;
// let t = 10;
// let n = 4;

// let ci = Math.pow(P * (1 + r / n), n * t);
// console.log(ci.toFixed(2));

// function printFactors(n) {
// Write your logic here
//   let factors = [];
//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i == 0) {
//       factors.push(i);
//     }
//   }
//   process.stdout.write(factors);
// }
// printFactors();

// let number = Number(prompt("Enter your number"));
// let ans = 0;
// let copy = number;
// while (number > 0) {
//   let dig = number % 10;
//   let fact = 1;
//   for (let i = dig; i >= 1; i--) {
//     fact = fact * i;
//   }
//   ans = ans + fact;
//   number = Math.floor(number / 10);
// }
// if (ans == copy) {
//   console.log("Strong Number");
// } else console.log("No");

// function calculateSumAndMean(arr, n) {
//   // Write your logic here
//   let sum = 0;
//   for (var i = 0; i < n; i++) {
//     arr.push(Number(prompt("Enter", i, "th Element")));
//   }
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   let mean = sum / arr.length;

//   mean.toFixed(1);

//   return [sum, mean];
// }

function reverseArrayInPlace(arr) {
  // Write your logic here
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    [right, left] = [left, right];
    left++;
    right--;
  }
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
