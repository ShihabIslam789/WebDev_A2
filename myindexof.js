// Indexof 
// without "Array.prototype.indexof" method in Javascript, we can create a "myindexOf" function that will take an array of elements and returns the first element or -1 if nothing is found. 
Array.prototype.myIndexOf = function (item, index = 0) {
    let length = this.length;
    var myindex;
    for (let i = index; i < length; i++) { 
        if (this[i] == item) {
            myindex = i;            
            break
        }
        else {
            myindex = -1;              
        }
    }
    return myindex;                    
};
