
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function 'calcAverage' to calculate the average of 3 scores
// Use the function to calculate the average for both teams
// Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// Ignore draws this time
// Test data:

// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27



const  calcAverage =(Score)=>{

    const totalScore = Score.reduce((init,curr)=> init + curr, 0)
    const avgScore = totalScore/ Score.length;

  

   return avgScore
}

 function checkWinner(avgDolphins, avgKoalas){

    if(avgDolphins  >= avgKoalas *2){

        console.log(`Dolphins Win(${avgDolphins} vs ${avgKoalas})`)
    }else if(avgKoalas  >= avgDolphins*2){
        console.log(`Koalas Win( ${avgKoalas} vs ${avgDolphins} )`)
    }else{
        console.log('No winner')
    }
    return
 }

 const averDolphs = calcAverage([85,54,41])
 const averKolas = calcAverage([23,34,27])
 const averDolphs1 =  calcAverage([44, 23, 71]);
 const averKolas1 = calcAverage([65, 54, 49]);
 const averDolphs2 = calcAverage([85,54,41])
 const averKolas2 = calcAverage([23,34,27])

 checkWinner(averDolphs, averKolas)
 checkWinner(averDolphs1, averKolas1)
 checkWinner(averDolphs2, averKolas2)



// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

function averageScore(dolphinScores, koalaScores){
     let minimum = 100;

     //find the average of Koalas
    const koalas = koalaScores.reduce((init , current)=> init + current, 0
    )
    const avgKoalas = koalas/koalaScores.length


      //find the average of dolphins
    const dolphins = dolphinScores.reduce((init , current)=> init + current)

    const avgDolphins = dolphins/dolphinScores.length
    
    //validation

    if(dolphinScores.length < 3 || koalaScores.length < 3){
        throw new Error("Average length in an array should be 3");
        
    }
     
    //Compare team average
    if(avgDolphins >= minimum && avgDolphins>avgKoalas){

        console.log(`Dolphins Win with average score ${avgDolphins}`)
    }else if(avgKoalas>=minimum && avgKoalas >avgDolphins){
        console.log(`Koalas  Win with average score ${avgKoalas}`)
    }else if(avgDolphins===minimum && avgDolphins ===avgKoalas){
        console.log('Draw')
    }else{
        console.log('No winner')
    }

    console.log(avgDolphins, avgKoalas)
}

averageScore([96,108,89], [88,91,110])
averageScore([97,112,101], [109,95,123])
averageScore([97,112,101], [109,95,106])
averageScore([109,95,106], [97,112,101] )
averageScore([109,95,123],[97,112,101]) 


//closures

function outerVariable (name){

    function innerVariable(gameOn){

        return ` My name is ${name} and i play ${gameOn}`

    }
    return innerVariable
}

const closures = outerVariable('Willy')

console.log(closures("Ps4"))


function nums(numero){

    return numero 
}

function square(num){
    console.log(`${num}`** 2 )
}

const eight = nums(8)

square(eight)




function music (artiste, title){
    function genres(genre){

        console.log(`${artiste} - ${title} [${genre}]`)
    }
    return genres
}

const artiste1 = music('Eminem', 'Lose Yourself')
artiste1('Hip Hop')