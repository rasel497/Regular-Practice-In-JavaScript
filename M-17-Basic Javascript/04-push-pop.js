// Add or remove element from array using push

var number = [78, 45, 98, 66];

// add new element number
number.push(75);
console.log(number);


//  string type element
var friends = ['kalam', 'aslam', 'salman'];
// add new element at end string
friends.push('shamim osman');

console.log('push element: ', friends);



// remove element from array using pop

var friends = ['kalam', 'aslam', 'salman', 'ayman sadik'];
// remove lat element of string
friends.pop();
console.log('pop element: ', friends);



// var popelement = friends.pop();
// console.log('pop element: ', popelement);



// add new element at begening string

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

fruits.unshift('Lemon', 'Pineapple');

console.log("fruitsBegening: ", fruits);


// remove first element from array using shift

var theElement = [111, 222, 333, 444];
var theRemoveElement = theElement.slice(0, 3);

console.log('theRemoveElement: ', theRemoveElement);



