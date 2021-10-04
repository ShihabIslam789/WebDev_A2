//push
//without "Array.prototype.push" with Javascript in a function called myPush will add elements to an array with elements already in it.
Array.prototype.myPush = function (elem) {
    let elem_ = 0;
    let size = this.length;
    for (let i = size; i < size + elem.length; i++) {   
        this[i] = elem[elem_];                          
        elem_++;                                       
    }
    return this.length;                                 
};
