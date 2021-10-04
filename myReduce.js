//myreduce
// without "Array.prototype.reduce", use a function called myreduce that will take an array of elements and execute a callback function on those elements.

Array.prototype.myReduce = function (callback, start) {
    let result = 0;

    if (start !== undefined) {
        result = start;
    }

    for (let i of this) {
        result = callback(result, i);
    }

    return result;
};
