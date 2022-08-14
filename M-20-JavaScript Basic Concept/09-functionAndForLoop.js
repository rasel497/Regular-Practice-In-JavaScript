function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        // console.log(i); // i print korle outputb 1 +++5 porjonto list dekhbe
    }
    return result;
}

const number = 5;
const fact = factorial(number)
// factorial(9);
console.log('factorial of : ', number, fact);

/**
function factorial(number) {
    let i = 7;
    let result = 1; //20tk

    while (i >= 7) {
        result = result * number;
        i++;

    }
    return result;
}


 */




