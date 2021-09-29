//push//
Array.prototype.myPush = function (elem) {
    let elem_ = 0;
    let size = this.length;
    for (let i = size; i < size + elem.length; i++) {   
        this[i] = elem[elem_];                          
        elem_++;                                       
    }
    return this.length;                                 
};
