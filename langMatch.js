// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish


function validateHello(greetings) {
 
  const regex = /hello|ciao|salut|hallo|hola|ahoj|czesc/i;


  return regex.test(greetings);
}

console.log(validateHello(`Hllo`)); 
console.log(validateHello(`Ciao`));  
console.log(validateHello(`Salut`)); 
console.log(validateHello(`Hallo`)); 
console.log(validateHello(`Czesc`)); 
console.log(validateHello(`Goodbye`)); 