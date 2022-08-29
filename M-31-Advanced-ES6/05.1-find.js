// find only 1ta number dibe R iflter 5 dra divide ja emon sob number dive
const numbers = [5, 12, 21, 24, 11, 18, 9, 55, 63, 75];

const fiveDivByFind = numbers.find(num => num % 5 === 0);
const fiveDivByFilter = numbers.filter(num => num % 5 === 0);


console.log(fiveDivByFind); //only a number
console.log(fiveDivByFilter); // all 5 div number

//
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 31000 },
    { id: 4, name: 'tablet', price: 23000 },
];

//min price only array first list dekhab e R filter sob choto num dekhbe
const cheapPriceItem = products.find(item => item.price < 40000);
console.log(cheapPriceItem);
