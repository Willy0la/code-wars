
//Challenge : Find Your Love

//Create a function  that:

//Takes a string input called name.

//Checks if the string includes the letter "i" or "o".

//If it does, return "You love Willy".

//Otherwise, return "Find your man".
function findYourLove(name){

    name = name.toLowerCase()
    //check if the string name inclued o or i,
    if(name.includes("o") || name.includes("i")){
        return "You love willy"
    }else{

        //return this if it doesnt include
        return "find your man"
    }
}

