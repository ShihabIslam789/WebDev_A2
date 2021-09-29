// INCLUDES //
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
