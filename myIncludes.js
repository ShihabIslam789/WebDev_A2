// INCLUDES 
// without "Array.prototype.includes" using a function called myIncludes will take in an array of elements and indicate whether or not a target element is contained within the input array. This returns a boolean.


Array.prototype.myIncludes = function(item,index = 0) {
    let length = this.length;
    var found;
    for(let i = index; i < length;i++){ 
        if(this[i] == item){
            found = true;               
            break
        }
        else{
           found =  false;              
        }
    }
    return found;                       
}
