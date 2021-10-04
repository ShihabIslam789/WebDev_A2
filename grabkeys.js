// grabkeys 
// without "Object.keys()", create a function grabKeys that takes objects and returns all of the value pairs of the object.
function grabKeys(callback)
{
    let objArr = []
    for (let keys in callback)
    {
        objArr.push(keys);  // pushes object's keys into the array objKeys
    }
    return objArr;
}
