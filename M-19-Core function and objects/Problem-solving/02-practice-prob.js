
function make_avg(num1, num2, num3) {

    const sumOfMarks = (num1 + num2 + num3);
    const totalMarks = sumOfMarks / 3;

    return totalMarks;
}

const num1Value = 85;
const num2Value = 77;
const num3Value = 95;

const getValue = make_avg(num1Value, num2Value, num3Value);

const fixedDecimal = getValue.toFixed(2);
console.log('your marks is: ', fixedDecimal);