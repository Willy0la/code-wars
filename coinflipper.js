


//Challenge
//Create a function that generates a random number... This random number should be used to determine the side of the coin .. if Even return Head if Odd return Tail
function coinflipper(){
//this generates a random number and round it down to the nearest integer 
let coin = Math.floor(Math.random()*2 )
console.log(coin)
//check if the number is divisible by 2 without any remainder(even number)
    if(coin%2 === 0){
        return "Heads"
    }else{
        //if number is not an even number return 
        return "Tails"
    }
   
}

console.log(coinflipper())

