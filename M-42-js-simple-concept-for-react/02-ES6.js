// template string, arrow function, spread operator
const numbers = [89, 66, 96, 79];
const student = {
    name: 'fahim khan',
    age: 13,
    movies: ['king khan', 'Dhakr King']
};

// 01. template string
const aboutKhan = `
My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies} watch.;

`;

// console.log(aboutKhan);


// 02. arrow function
const getFiftyFive = () => 55; //simple arrow func here is return 55.
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


// 03.spread operator
const newNumbers = [...numbers];
//create a new array from older array and add an element
const currentnumbers = [...numbers, 55];

numbers.push(222);
console.log(numbers);
console.log(newNumbers);
console.log(currentnumbers);
