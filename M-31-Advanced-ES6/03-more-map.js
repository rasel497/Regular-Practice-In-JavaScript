//without variable
const numbers = [12, 56, 87, 44].map(x => x / 2);
console.log(numbers);
// with variable
const numbers2 = [22, 55, 88, 64];
const half = numbers2.map(num => num / 2);
console.log(half);

// 3rd
const numbers3 = [39, 55, 27, 64];
const third = numbers3.map(num => num / 3);
console.log(third);

// string type first letter
const friends = ['Tui Tom Hanks', 'Tom Cruise', 'Tom Jerry', 'Tom Solaiman'];
const friendFirstLetter = friends.map(friend => friend[0]);
console.log(friendFirstLetter);

//string length for friends
const nameLength = [friends.map(friend => friend.length)];
console.log(nameLength);

//products
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

// const items = products.map(product => console.log(product));
const items = products.map(product => product.name);
console.log(items);

//prices
const prices = products.map(p => p.price);
console.log(prices);
