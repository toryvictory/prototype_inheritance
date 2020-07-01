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

console.log(arr.includes('a', -2));
console.log(customArray.includes('a', -2));

console.log(arr.join(''));
console.log(customArray.join(''));

console.log(arr.filter(isOdd));
console.log(customArray.filter(isOdd));

function addOne(element) {
    return element + "1";
}

console.log(arr.map(addOne));
console.log(customArray.map(addOne));

function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
};

console.log(arr.reduce(reducer, 0));
console.log(customArray.reduce(reducer, 0));

console.log(customArray.pop());
console.log(customArray);


