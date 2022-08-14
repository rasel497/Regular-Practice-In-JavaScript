
// A factorial is nimber that multiples a number by every nnumber belore it till 1.
//  1+ 2 + 3 + 4 + 5 + 6 + 7


function factorial(number) {
    let result = 1;
    for (let i = 1; i <= 9; i++) {
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);

/***
 function sumOfNumbers(number) {

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
 */

//console.log(sumOfNumbers);