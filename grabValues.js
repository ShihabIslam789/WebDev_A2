//values 
// without "Object.values.()" write a function grabvalues that will take in an object and return all values of the object.

function grabValues(callback)
{
    let objectArray = []
    for (let values in callback)
    {//for loop new values into the array
        objectArray.push(callback[values]); 
    }
    return objectArray;
};
