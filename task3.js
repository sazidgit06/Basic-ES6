/**
 * Write an arrow function that will take 2 parameters: One parameter 
 * will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
 */


const add = (num1=0, num2=0) => num1+num2;
const res = add(5);
console.log(res);