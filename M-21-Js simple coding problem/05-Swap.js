let first = 5;
let second = 7;

console.log(first, second);

// swap wrong approach
// frist = second;
// second = frist;

// ---- swap temp right way
const temp = first;
first = second;
second = temp;

console.log(first, second);

// ---- swap without temp, destructing
/*
[first, second] = [second, first];

console.log(first, second);
**/