//mysome
//without "Array.prototype.some" this function will take an array of elements and execute a callback function on each element.
Array.prototype.mySome = function (callback) {

    let var_ = false;
    for (let i of this) {
        if (callback(i) == true) {
            var_ = true;
        }
    }

    return var_;
};
