// filter use kore amra Max nad Min number ber korte pari
//Max
const numbers = [5, 12, 21, 24, 11, 18, 9, 55, 63, 75];
const maxNumber = numbers.filter(num => num > 20);
console.log(maxNumber);

//Min
const minNumber = numbers.filter(num => num < 20);
console.log(minNumber);

//show even number form the array list
const evenNumber = numbers.filter(num => num % 2 === 0);
console.log('the Even:', evenNumber);

//show even number form the array list
const oddNumber = numbers.filter(num => num % 2 !== 0);
console.log('the Odd:', oddNumber);

//numbers
console.log(numbers);


const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

const expensive = products.filter(product => product.price > 100000);
console.log(expensive); // empty string
