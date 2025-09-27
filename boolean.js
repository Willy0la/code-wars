//convert boolean values into a string
//complete the method that takes a boolean value and return a "YES" string or a false to "No string"

function bool (boolean){
    
    if(typeof boolean  !== 'boolean'){
        return `You can only parse in a boolean`
    
    }if(boolean === true){
        return 'yes'
    }else{
        return 'no'
    }

}

console.log(bool('sd'))