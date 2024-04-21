/***pseudocode**
initialize a new Map
initialize a new Set

for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the Set

    convert the Set to an array and return
*/

function intersection(a, b) {

    const aMap = new Map();
    const intersectSet = new Set();

    for(let i=0; i < a.length; i++) {   
      aMap.set(a[i],i);
      console.log(aMap.keys());
      console.log(aMap.values());
    }

    for(let i=0; i < b.length; i++) {
        if(aMap.has(b[i])){
           intersectSet.add(b[i]);
        }
    }
 const intersectArray = [...intersectSet];
return intersectArray;




}

module.exports = intersection;
