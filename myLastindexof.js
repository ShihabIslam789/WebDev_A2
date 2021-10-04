// LASTINDEXOF 
//without "Array.prototype.lastindexof" we can create a function will take an array of elements and returns the last possible index of the array.
function mylastIndexOf(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            return arr[i];    
        }
    }
    return -1;        

};
