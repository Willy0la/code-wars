



function magicSquare(square) {
  let target = 15;
  let angle = square.length;
  //row
  for (let i = 0; i < angle; i++) {
    let rowSum = 0;

    for (let j = 0; j < angle; j++) {
      rowSum += square[i][j];
    }

    if (rowSum !== target) {
      return false;
    }
  }

  //column
  for (let j = 0; j < angle; j++) {
    let colSum = 0;

    for (let i = 0; i < angle; i++) {
      colSum += square[i][j];
    }

    if (colSum !== target) {
      return false;
    }
  }

  //diagonal

  

  let diagonalSum = 0;
  for (let i = 0; i < angle; i++) {
    diagonalSum += square[i][i];
  }
  if (diagonalSum !== target) {
    return false;
  }



  let antiDiagonalSum = 0;

  for (let i = 0; i < angle; i++) {
    antiDiagonalSum += square[i][angle - 1 - i];
  }
  if (antiDiagonalSum !== target) {
    return false;
  }

  return true;
}

 const magNumber = [[ 8, 3, 4 ],
                    [ 1, 5, 9 ],
                     [ 6, 7, 2 ] ]

// console.log(magicSquare(magNumber));



function findingmagicNumber(nums) {


     if(!Array.isArray(nums)){
        throw new Error('input must be an array of 9 numbers')
    }

    if(nums.length !== 9){
        throw new Error('Must provide exactly 9 numbers')
    }

   

    for(let i = 0; i < nums.length; i++){
        let current = nums[i]

        if(typeof current !== 'number' || Number.isNaN(current)){
            throw new Error(`Invalid Number`);
        }

        if(current <1 ||current > 9){
            throw new Error( 'input  should be numbers  from 1 to 9')
        }

        for  (let j = i+1 ; j<nums.length; j++){
            if(nums[j] === current){
                throw new Error(`Ensure you dont have one number, written twice `)
            }
        }
    }

  
  let solution;

  for (let a = 0; a < nums.length; a++) {
    for (b = 0; b < nums.length; b++) {
      if (b === a) continue;
      for (let c = 0; c < nums.length; c++) {
        if ([a, b].includes(c)) continue;
        for (let d = 0; d < nums.length; d++) {
          if ([a, b, c].includes(d)) continue;
          for (let e = 0; e < nums.length; e++) {
            if ([a, b, c, d].includes(e)) continue;
            for (let f = 0; f < nums.length; f++) {
              if ([a, b, c, d, e].includes(f)) continue;
              for (let g = 0; g < nums.length; g++) {
                if ([a, b, c, d, e, f].includes(g)) continue;
                for (let h = 0; h < nums.length; h++) {
                  if ([a, b, c, d, e, f, g].includes(h)) continue;
                  for (let i = 0; i < nums.length; i++) {
                    if ([a, b, c, d, e, f, g, h].includes(i)) continue;

                    const grid = [
                      [nums[a], nums[b], nums[c]],
                      [nums[d], nums[e], nums[f]],
                      [nums[g], nums[h], nums[i]],
                    ];

            
                    if (magicSquare(grid)) {
                      solution =grid ;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return solution;
}

 console.log(findingmagicNumber([1,2,3,4,5,6,7,8,10]))
// console.log(findingmagicNumber(9,1,2,3,4,5,6,7,8))