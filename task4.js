/**
 * Write an arrow function where it will do the following:
 * a) It will take an array where the array elements will be your friends name.
 * b) Check if the length of each element is even, push elements with even length to a new array and return the result.
*/

const getName = function(friends) {
    let newArr = [];
    for(const friend of friends){
        const len = friend.length;
        console.log(len);
        console.log(friend);
        if(len % 2 == 0){
            newArr.push(friend);
        }
    }
    return newArr;
}

const friends = ['kola', 'am', 'tormuj', 'bangi'];
const res = getName(friends);
console.log(res);