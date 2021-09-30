// Indexof //

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
