//Complete the solution so that it reverses the string passed into it

function reverse(letter){

    let reverseLetter = ''
    for (let i = letter.length -1; i<=0; i--){

       reverseLetter+= letter[i]
    }

    console.log(reverseLetter);
    
}

//Pring the letter forward
function forward(forward){
   

    for (let i = 0;  i<forward.length; i++){
        
           console.log(forward[i])
    }

    console.log(forward)

}

//find the vowel





//sum


function sumNumber (arr){
    let sum = 0;

    for(let i = 0; i<arr.length; i++){

        sum +=arr[i]

    }

    console.log(sum)
}


function reduceArray(arr){

  let sum = arr.reduce((init, curr)=>{
        return init + curr
  },0)

  console.log(sum)
}

function forSum(arr){
   let add =0
   arr.forEach(element => {

     console.log (add+=element)
        
    });
console.log(add)
   
}

function findLargestNumber(arr){

    // this initialize the array from the first index

     let largest = arr[0]

     // start from the beggining of the index, the index being less than the property  return incrementally
for(let i =0; i<arr.length ; i++){

   
    //loop through the array based on the index  then check if  each property of the index is greater , and then store the largest in the array
    if(arr[i] < largest){
         largest = arr[i]
    }
}
console.log(largest)
}


function reduLargest(arr){
    //this loop from the initial starting from zero then check if the first number is greater than the previous number and loop till the end,, it checks the lrgest number from the loops

    let reducer = arr.reduce((init, curr )=>{
        if(curr < init){
            return curr
        }else{
          return init
        }

    })
    console.log(reducer)
}

const maxer = Math.max(...[1,4,6,8,9,0])

const checkSmaller = (arr)=>{

    let smallest = arr[0]

    for(let i = 0; i < arr.length ; i++){

        if(arr[i]< smallest){
          smallest = arr[i]
        }
    }
    console.log(smallest)
}

const reduceSmaller =(arr)=>{
    let reduSmaller = arr.reduce((init, curr)=>{

        if(init< curr){
            return init
        }else{
            return curr
        }
    })
    console.log(reduSmaller)
}

console.log(`Lol see ${maxer}`)
reverse('Javascript')

forward('Wills')
vowel("javascript")
sumNumber([ 1,4,6,8,9,0,])

reduceArray([ 1,4,6,8,9,0,])
forSum([ 1,4,6,8,9,0,])

findLargestNumber([3,7,2,9,5])
reduLargest([3,7,2,9,5])
checkSmaller([3,7,2,9,5])
reduceSmaller([3,7,2,9,5])