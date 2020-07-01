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
