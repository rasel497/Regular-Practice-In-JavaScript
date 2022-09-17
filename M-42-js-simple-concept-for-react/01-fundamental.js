// Six JavaScript Fundamentals that you need to know

// 01. How to declare a variable using let and const
const fatherName = 'Shafiqul Islam';
let season = 'rainy';


// 02. conditions:
// 6basic conditions: >,<,===, !==, <=, >=
// multiple conditions: &&, ||
if (fatherName === 'Shafiqul Islam' && season === 'rainy') {
    // console.log('my father')
}
else if (fatherName === 'shafiqul islam') {
    // console.log('not my father');
}
else {
    // console.log('Who are you?');
}


// 03. array declare: index, length, push()
const numbers = [89, 69, 79, 49, 99];
let indexOfElemet = numbers.indexOf(49); //array element specified position.
numbers[2] = 100; //index diye arary element update kora jay.
numbers.push(59); //add new array element in last position.
numbers.unshift(55); //add new array element in first position.
numbers.shift(3); //remove array element in any position.
numbers.pop(); //remove the last element in array.
// console.log(indexOfElemet);
// console.log(numbers);


// 04. fundamental for loop
// const numbers = [89, 69, 79, 49, 99];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
}

// 05. function declare
function multiply(num1, num2) {
    const result = num1 + num2;
    return result;
}
const sum = multiply(12, 12);
// console.log(sum);


// 06. Object declare
const student = {
    name: 'Rasel',
    roll: 44,
    department: 'CSE',
    subjects: ['JavaScript', 'css', 'tailwind']
}
// 3 ways to acces property by name
const myRoll = 'roll';

console.log(student.roll); // direct by property
console.log(student['roll']); // access via property  name by string
console.log(student[myRoll]); // access via property name in a variable declare.

