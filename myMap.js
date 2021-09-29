//MAP
// iniiazling an array
let arr = [11, 22, 33];

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

//console.log("myMap: "); 
//arr = arr.myMap(x => x*2);
//console.log(arr);
