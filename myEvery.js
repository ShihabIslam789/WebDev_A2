//myevery
Array.prototype.myEvery = function (callback) {
    for (let i of this) {
        if (callback(i) == false) {
            return false;
        }
    }

    return true;
};
