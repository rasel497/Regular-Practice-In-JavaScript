//01. array destructuring
const numbers = [42, 65];
// const [x, y] = [42, 65];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(90, 34));

const nayoik = {
    name: 'fahim khan',
    age: 13,
    movies: ['king khan', 'Dhakr King']
};
const [firstMovie, secondMovie] = nayoik.movies;
// console.log(nayoik.movies);

// 02. object destructuring
// const { name, age } = { name: 'rasel', age: 26 };
const { name, age } = { id: 044, name: 'rasel', salary: 30000, age: 26 };

const employee = {
    id: 0444,
    name: 'Rasel',
    desigination: 'web developer',
    machine: 'mac',
    languages: ['htm', 'css', 'js'],
    specefication: {
        height: 66,
        weight: 67,
        address: 'Kumarkhali',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin',
        }
    }

};

// destructuring
const { id, machine } = employee;
const { height, address } = employee.specefication;
const { color, brand } = employee.specefication.watch;
// const { color, brand } = employee?.specefication?.watch?; // optional chain ?
