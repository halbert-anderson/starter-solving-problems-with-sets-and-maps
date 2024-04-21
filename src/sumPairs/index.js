/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */

/******psuedocode******
* 
inputs: an array of numbers named A
        a target value named N

initialize a new Map named numbers
initialize a new Map named solution

for each element e in A do:
   add e to numbers

for each element e in A do;
  calculate diff = N - e
  if diff is not equal to e then  (1)
     look up diff in numbers
     if diff is in numbers then
       add [e, diff] to solution (2)

convert solution to an array and return it
* 
******************/


function sumPairs(A, N) {
const numbers = new Map();
const solutions = new Map();

for(let i=0;i<A.length;i++){
   numbers.set(i,A[i]);
}
console.log(`numbers: ${numbers}`);

for(let i=0;i<A.length;i++){
    const diff = N - A[i];
    if(diff!==A[i]){
        for (let value of numbers.values()) {
            if(diff===value && !solutions.has(diff)){
                solutions.set(A[i],diff)
            }
          }
    }
}
 return [...solutions];
}



module.exports = sumPairs;
