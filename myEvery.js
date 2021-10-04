//myevery
// without "Array.prototype.every" make a function called myEvery that takes an array of elements and executers a callback function on every elements.
Array.prototype.myEvery = function (callback) {
    for (let i of this) {
        if (callback(i) == false) {
            return false;
        }
    }

    return true;
};
