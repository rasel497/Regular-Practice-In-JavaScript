// 01. way---normal way
const numbers = [2, 4, 8, 6, 3];
// const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);


// 02. way---using function
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// function doubledItOld(number) {
//     return number * 2;
// }

const doubleIt = num => num * 2;

const result = getDoubles(numbers);
console.log(result);


//using map second output
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
// third output
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);
//4th output
const makeDouble2 = numbers.map(x => x * 2);
console.log(makeDouble2);

//wowwwwwwww....map only single line multiple
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);

const threeTimes = [1, 2, 3, 4, 5].map(z => z * 3);
console.log(threeTimes);
/*
purose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result
*/

