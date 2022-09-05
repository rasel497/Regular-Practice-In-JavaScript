// Asynchronous vs Synchronous
// Asynchronous
// normal function
function doSomething() {
    console.log('third');
}

console.log('first');
console.log('second');
// dhaka();
// setTimeout(dhaka);
//arrow function
// setTimeout(() => { console.log('third') }, 5000) // 5sec wait then third asbe
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('response received');
        return response.json()
    })
    .then(json => console.log(json))
console.log('fourth');
console.log('fourth');

// Synchronous

// console.log('first');
// console.log('second');
// console.log('fourth');
// console.log('fifth');