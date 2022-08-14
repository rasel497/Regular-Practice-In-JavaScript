// Math, pow
const result = Math.pow(3, 2);
console.log('MathAbsPow :', result);

// Math, abs,
const male = 60;
const female = 55;

const gap = Math.abs(male - female);

if (gap < 6) {
    console.log('You can go to married life');
}
else {
    console.log('We are frinds');
}

// ---------------
const number = 2.48569;
const fullNumber = Math.round(number);
console.log('Round number is: ', fullNumber);

//-----Math.ceil // Math.floor-----decimal 

const uppOne = Math.ceil(2.3669);
console.log('the Math.ceil number: ', uppOne);


const bottomOne = Math.floor(5.32100);
console.log('the Math.floor number: ', bottomOne);


//--------Math.random
for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 5);
    console.log(random);
}