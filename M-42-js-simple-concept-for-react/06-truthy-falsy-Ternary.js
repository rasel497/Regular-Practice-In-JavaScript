// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
    // console.log(myVar);
}
else {
    myVar = 0;
}

// ternary  ,,wowww  work like if else
let money = 80;
let food = money > 100 ? 'biriyani' : 'cha biscuit';
// console.log(food);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'drink filter pani';
// console.log(drink);

// number To string convert
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// string To number
const input = '560';
const inputNum = +input;
// console.log(inputNum);


//truthy shortcut
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? hideUser() : showUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolen
isActive = !isActive;
