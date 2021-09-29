//mysome

Array.prototype.mySome = function (callback) {

    let var_ = false;
    for (let i of this) {
        if (callback(i) == true) {
            var_ = true;
        }
    }

    return var_;
};
