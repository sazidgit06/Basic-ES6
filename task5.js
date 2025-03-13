/**
 * Write a arrow function where it will do the following:
 * a) Square each array element 
 * b) Calculate the sum of the square elements 
 * c) Return the average of the sum of the squared elements
*/

const getAvg = function(numbers){
    let sum = 0;
    const len = numbers.length;
    for(const num of numbers){
        const squareNum = num * num;
        sum = sum + squareNum;
    }
    console.log(sum);
    const avg = sum / len;
    return avg;
}

const numbers = [1, 2, 3, 4, 5];
const res = getAvg(numbers);
console.log(res);