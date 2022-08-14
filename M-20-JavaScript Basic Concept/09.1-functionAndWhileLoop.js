function factorial(number) {

    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
        // console.log(i);
    }
    return result;
}

// factorial(7);

const output = factorial(7);

console.log(output);