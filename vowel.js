function vowel(word){

    let vowel = 'aeiou'
    let vowelFound = ''
    for (let i = 0; i<word.length; i++){
        
        for(let j = 0; j<vowel.length; j++){

               if(word[i] === vowel[j]){
            vowelFound += word[i]
        }
        
        }
    
    }

    console.log(vowelFound)
      
}





vowel('Willoughby')

function isVowel(char)
{
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}



const tarrr =      [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],];

  console .log (tarrr[2][1])