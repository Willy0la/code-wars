



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

    // [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

  let antiDiagonalSum = 0;

  for (let i = 0; i < angle; i++) {
    antiDiagonalSum += square[i][angle - 1 - i];
  }
  if (antiDiagonalSum !== target) {
    return false;
  }

  return true;
}

const magNumber = [[ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ] ]

console.log(magicSquare(magNumber));



function findingmagicNumber(nums) {

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

console.log(findingmagicNumber([9,2,3,7,5,6,1,8,4]))