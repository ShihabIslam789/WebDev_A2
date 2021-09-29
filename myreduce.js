//myreduce
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
