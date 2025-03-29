// Bubble sort
let arr = [2, 5, 8, 5.8, 9, 6, 7.5, 51];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j <= arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
// console.log(arr);

// Selection Sort
// for (let i = 0; i < arr.length - 1; i++) {
//   let smallest = i;
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[smallest] > arr[j]) {
//       [arr[smallest], arr[j]] = [arr[j], arr[smallest]];
//     }
//   }
// }
// console.log(arr);

// Insertion Sort

for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
console.log(arr);
