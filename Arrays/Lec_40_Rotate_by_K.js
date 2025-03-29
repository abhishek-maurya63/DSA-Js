// brute force Approch

// const prompt = require("prompt-sync");
let arr = [1, 2, 3, 4, 5];
// let n = 2;
// for (let k = 1; k <= n; k++) {
//   let copy = arr[0];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);

// Method 2
let k = 2;
let newArr = [];
for (let i = 0; i <= arr.length - 1; i++) {
  newArr[i] = arr[(i + k) % arr.length];
}
console.log(newArr);

// method 3
// let k = 3;
// function reverseArray(arr, left, right) {
//   while (right > left) {
//     [arr[right], arr[left]] = [arr[left], arr[right]];
//     left++;
//     right--;
//   }
// }

// reverseArray(arr, 0, k - 1);
// reverseArray(arr, k, arr.length - 1);
// reverseArray(arr, 0, arr.length - 1);
// console.log(arr);

// Binary search

let i = 0;
let j = arr.length - 1;
let target = 2;
while (i <= j) {
  let mid = Math.floor((i + j) / 2);
  if (arr[mid] == target) {
    console.log("Target Found at index", mid);
    break;
  } else if (target < arr[mid]) {
    j = mid - 1;
  } else i = mid + 1;
}
