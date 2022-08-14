function add(num1, num2) {

    if (typeof num1 !== 'number' || num2 !== 'number') {
        console.log('please enter a number');
    }

    return num1 + num2;
}

const result = add(12, 22);
console.log(result);

function multiply(num1, num2) {

    console.log(num1, num2);
    return num1 * num2;
}

const result2 = multiply(22, 2);
console.log(result2);

