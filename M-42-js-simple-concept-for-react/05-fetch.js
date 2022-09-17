// JSON, Fetch, keys, values, array add or remove using dots
//01. JSON => stringify, prase
const student = {
    name: 'fahim khan',
    age: 13,
    movies: ['king khan', 'Dhakr King']
};
//javaScript object to string
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
//string to javaScript object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


//02. fetch sample
/*
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));
*/

//03. keys , values
const keys = Object.keys(student);
console.log(keys); //keys amra only property name gula pabo.

const values = Object.values(student);
console.log(values); // values amra only property Er value gula pabo.

//04. forEach
const numbers = [23, 54, 67, 87, 23, 78];
//array er moddhe jodi amdr loop chalano lage thle amr forEach use korbo.
//amra jodi kono kichu return na pete chai thle amra forEach use korbo.
numbers.forEachO(num => console.log(num));
// jodi amra kono 1ta array thke heseb kore gone  kichu 1ta return pete chai thle amra map use korbo
numbers.map(num => num * 2);

//05. getElementByClassName, querySelectorAll
// loops through the values of an iterable object
// loops through the properties of an object using for in


// 06. add or remove product
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 700, brand: 'iPhone', color: 'white' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'silver' },
    { name: 'sunglass', price: 300, brand: 'raybean', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];
// add new product
const newProduct = { name: 'webcam', price: 700, brand: 'RexMond', color: 'purple' };
const newProducts = [...products, newProduct];
console.log(newProducts);

// remove array wowwwwww
// remove phone means create new array without phone
const remaining = products.filter(product => product.name !== 'phone');
// eikhne bujano hoice phone chara ami baki sob gula element nibo.
