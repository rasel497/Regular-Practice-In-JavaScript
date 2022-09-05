// alert('Hello, Im Interval');
/*
console.log('first');
console.log('second');
console.log('third');

let seconds = 0;
setInterval(() => {
    console.log(seconds++);
}, 1500)
console.log('four');
console.log('fifth');

 */
// i++ (0---9) vs ++i (1---10)
console.log('first');
console.log('second');
console.log('third');

let seconds = 0;
const intervalId = setTimeout(() => {
    // seconds++;
    console.log(++seconds);
    if (seconds === 10) {
        clearTimeout(intervalId);
    }
}, 500)
console.log('four');
console.log('fifth');