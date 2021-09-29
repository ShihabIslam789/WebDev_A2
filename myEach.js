//ForEACH
const arr = [10, 20, 30]

Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};
