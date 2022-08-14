const friends = [12, 13, 25, 36, 69, 55, 66, 84, 69, 75, 45];

//  Removes elements from an array
// and, if necessary, inserts new elements in their place, 
// returning the deleted elements.


const partial = friends.splice(2, 5);
// add new 2 start point 5 end point
const partialAdd = friends.splice(2, 5, 11, 22, 33, 44);

console.log(partial);
console.log(partialAdd);
console.log(friends);