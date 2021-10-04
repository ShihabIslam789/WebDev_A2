//values 
// without "Object.values.()" write a function grabvalues that will take in an object and return all values of the object.

function grabValues(callback)
{
    let objArr = []
    for (let values in callback)
    {
        objArr.push(callback[values]); // pushes the object's values into the array
    }
    return objArr;
}
