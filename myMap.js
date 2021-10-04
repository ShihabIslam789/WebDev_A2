//MAP 
// without "Array.prototype.map" we create an array and commit to a comback function for each element in the array.

Array.prototype.myMap = function (callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    return newArray;
}


