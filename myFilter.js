//myfilter

Array.prototype.myFilter = function (callback) {

    let newArray = [];
    let y = this.length;
    for (let i = 0; i < y; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};
