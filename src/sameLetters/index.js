/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
/*
Input: an array of words named words

instantiate a new Map named results

for each word in the words array do:
  lowercase word
  find all unique letters in word
    create a Set with all the letters of the word to remove duplicates
    create an array of letters from the Set and sort alphabetically
    use join to create a string from the array
  if the sorted string of letters is a key in the results Map then
    add word to the array associated with that key
  else
    make a new entry in the results Map with key = sorted string of letters and the value an array with word as its only element
return the results Map

*/
function sameLetters(words) {
  const results = new Map();

  words.forEach((word) => {
    console.log(`word: ${word}`);
    
    const letterSet = new Set(word.toLowerCase());
    console.log(`letterSet: ${letterSet}`);
   
    const letterArray=[...letterSet];
    console.log(`letterArray: ${letterArray}`);
    
    const sortedString = letterArray.sort().join("");
    console.log(`sortedString: ${sortedString}`);
 
    if(results.has(sortedString)){
       
        results.set(sortedString, [...results.get(sortedString),word]);
        console.log(results);
    }
    else{
        results.set(sortedString, [word]);
        console.log(results);
    }
 })

return results;
}

module.exports = sameLetters;
