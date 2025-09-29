
function switchCalculator(a,operator, b){
let result;
   
    switch(operator){
        case '+':
            result = a + b;
        
        break;

        case '-':
            result = a - b;
        break;

        case '*':
            result =  a * b
        break;

        case '/':
                if(b === 0){
               console.log('You cant divide with zero')
               return;
            }
            result = a/b;
            break;
        
            default:
             console.log('Invalid Operator')
      
    }

    console.log(result)
}
switchCalculator(10,'/', 0)
ifElseCalculator(12 , '/', 3)
ifElseCalculator(12 , '*', 0)
ifElseCalculator(12 , '*', 3)
ifElseCalculator(12 , '+', 3)
ifElseCalculator(12 , '-', 3)
ifElseCalculator(12 , '_', 3)



function ifElseCalculator( a, operator, b){

    let result
    if(operator === '+'){
        result = a+b;
  

    }else if(operator === '-'){
        result = a-b
  

    }else if(operator === '*'){
        result = a * b
    
    }else if(operator === '/'){

        if(b === 0){
            result = 'You cannot use zero as a denominator';
          
        }else{
            result = a/b;
            
        }
        
    }else{
        result = 'Input a valid operator'
       
    }

    console.log(result)


}

ifElseCalculator(2 , '/', 0)
ifElseCalculator(12 , '/', 3)
ifElseCalculator(12 , '*', 0)
ifElseCalculator(12 , '*', 3)
ifElseCalculator(12 , '+', 3)
ifElseCalculator(12 , '-', 3)
ifElseCalculator(12 , '_', 3)