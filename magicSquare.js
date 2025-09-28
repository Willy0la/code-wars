function magicSquare (square){
 
    let target = 15
    let angle = square.length
 //row
    for(let i = 0; i < angle ; i++){

        let rowSum = 0;

        for (let j = 0; j<angle; j++){

            rowSum+=square[i][j]
        }

        if(rowSum !== target){
            return false
        }
    }

    //column
    for (let j = 0; j<angle; j++){
        let colSum = 0;

        for(let i= 0; i< angle; i++){
             colSum+=square[i][j]
        }

         if(colSum !== target){
            return false
        }
        }

        //diagonal

         let diagonalSum = 0
        for (let i = 0; i < angle ; i++){
           diagonalSum+=square[i][i]
            
          }
            if(diagonalSum !== target){
            return false
           }
        

        let antiDiagonalSum = 0;

        for(let i = 0; i <angle ; i++){
            antiDiagonalSum +=square[i][angle-1-i]
        
        }
        if(antiDiagonalSum !== target){
            return false
        }
    
        return true
    }

    

    const magNumber = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];
console.log(magicSquare(magNumber))


