// five ways to create an object

//01- create objetcs using objects literals syntax
// we using objects literals and class
const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';

player.bat = function () {
    // console.log('swing your bat');

}
// console.log(player);
player.bat();

// 1.1- another create object
const student = {
    name: 'Pandey',
    job: 'Eating fruits',
    ball: function () {
        // console.log('throw the ball')
    },
    salary: 100000
}
// console.log(student);
student.ball();


// 02- create object constructor
const person = new Object();
// console.log(person);

//03- object created by methods
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name);

//04- objects Es6 class
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);

//05- function diye object  Not using us
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 3225);
console.log(tesla);
