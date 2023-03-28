const greet = require("greet-package-albert");
const { mergeSort, binarySearch } = require("mergesorting_binarysearch_albert");

greet("joe doe");
const arr = [10, 4, -2, 8, -6];
console.log(mergeSort(arr));
console.log(binarySearch(arr, 2));
