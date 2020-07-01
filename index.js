'use strict';

const customArray = new MyArray();
console.log(`Output of "customArray.isMyArray()": ${customArray.isMyArray()}`);

customArray.push(10, 7, 8, 'a', 'b');
console.log(customArray);

const arr = [10, 7, 8, 'a', 'b'];

function isOdd(number) {
    return number % 2 !== 0;
}

console.log(arr.find(isOdd));
console.log(customArray.find(isOdd));
