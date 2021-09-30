\\ grabkeys //
function grabKeys(callback)
{
    let objArr = []
    for (let keys in callback)
    {
        objArr.push(keys);  // pushes object's keys into the array objKeys
    }
    return objArr;
}
