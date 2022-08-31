// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))

// asynchoronous
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
catch {

}


// synchronous asynchronous
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(312);
console.log(5);
console.log(15);




