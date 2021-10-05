//myfilter
//without "Array.protoype.filter" the myfilter function will commit to a callback operation on the elements in the array.
Array.prototype.myFilter = function (callback) {

    let newestArray = [];
    let y = this.length;
    for (let i = 0; i < y; i++) {
        if (callback(this[i])) {
            newestArray.push(this[i]);
        }
    }
    return newestArray;
};
