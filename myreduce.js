//myreduce
// without "Array.prototype.reduce", use a function called myreduce that will take an array of elements and execute a callback function on those elements.

Array.prototype.myReduce = function (callback, initial) {
    let output = 0;

    if (initial !== undefined) {
        output = initial;
    }

    for (let i of this) {
        output = callback(output, i);
    }

    return output;
};
