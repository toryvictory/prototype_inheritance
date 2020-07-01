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



