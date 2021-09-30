//MAP //
// initializing an array

Array.prototype.myMap = function (callback) {
    // create a new array
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    return newArray;
}


