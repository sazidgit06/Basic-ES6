/**
 * Write an arrow function where it will do the following:
 * a) It will take two array inputs 
 * b) Combine the two arrays and assign them in a new array
 * c) Find the maximum number from the new array and return the result.
*/

const getMax = function(arr1, arr2){
     const newArr = [...arr1, ...arr2];
     console.log(newArr);
     const max = Math.max(...newArr);
     return max;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const res = getMax(arr1, arr2);
console.log(res);