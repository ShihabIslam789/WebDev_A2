//values //

function grabValues(callback)
{
    let objArr = []
    for (let values in callback)
    {
        objArr.push(callback[values]); // pushes the object's values into the array
    }
    return objArr;
}
