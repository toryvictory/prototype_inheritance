'use strict';

function MyArray() {
    if (!new.target) {
        return new MyArray();
    }
    this.length = 0;
    this.isMyArray = function isMyArray() {
        return (this instanceof MyArray);
    }
}

const myArrProto = new MyArray();
MyArray.prototype = myArrProto;

myArrProto.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
    }
    return this.length;
};

myArrProto.find = function find(callback) {
    let element;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            element = this[i];
            break;
        }
    }
    return element;
};

myArrProto.includes = function includes(valueToFind, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = this.length + fromIndex;
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === valueToFind) {
            return true;
        }
    }
    return false;
}

myArrProto.join = function join(separator = ',') {
    let string = '';
    for (let i = 0; i < this.length - 1; i++) {
        string = string + String(this[i]) + separator;
    }
    string = string + String(this[this.length - 1]);
    return string;
}

myArrProto.filter = function filter(callback) {
    const myArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            myArr.push(this[i]);
        }
    }
    return myArr;
}

myArrProto.map = function map(callback) {
    const myArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
        myArr.push(callback(this[i], i, this));
    }
    return myArr;
}

myArrProto.reduce = function reduce(callback, initialValue) {
    let counterStart;
    let accumulator;
    if (initialValue === undefined) {
        counterStart = 1;
        accumulator = this[0];
    } else {
        counterStart = 0;
        accumulator = initialValue;
    }
    for (let i = counterStart; i < this.length; i++) {
       accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}