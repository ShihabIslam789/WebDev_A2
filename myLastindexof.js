// LASTINDEXOF //
function mylastIndexOf(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            return arr[i];    
        }
    }
    return -1;        

};
