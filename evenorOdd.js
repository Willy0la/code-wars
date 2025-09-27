//Create a function  that takes an integer as an argument and return Even for even numbers or odds for odd number

function oddOrEven(number){

  if(typeof number !== 'number'){
    return 'Only a number can be passed as an argument'
  }

  if(number %2 == 0){

    return `This number: ${number} is an Even number `
  }else{
    return `This number: ${number} is an Odd number `
  }
}

console.log(oddOrEven(6))
console.log(oddOrEven(5))