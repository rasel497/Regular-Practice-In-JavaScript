const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 700, brand: 'iPhone', color: 'white' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'silver' },
    { name: 'sunglass', price: 300, brand: 'raybean', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

//01. jodi amra kono 1ta array thke heseb kore gone  kichu 1ta return pete chai thle amra map use korbo
// map kono 1ta kichu thke array return korbe
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

//02. forEach kichu return korbe na
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product => {
    // multiple forEach
});

//03. filter sob condition check kore return korbe
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

//04. find first je condition match pabe ta diye execute hoye jbe
const specialWord = products.find(product => product.name.includes('n'));
console.log(specialWord);

