let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
function compareNumbers(a, b) {
  return a - b;
}
arr.sort(compareNumbers);
console.log(arr[arr.length - 1]);
