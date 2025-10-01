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
