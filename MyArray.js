'use strict';

function MyArray() {
    this.length = 0;
    this.isMyArray = function isMyArray() {
        return (this instanceof MyArray);
    }
}
