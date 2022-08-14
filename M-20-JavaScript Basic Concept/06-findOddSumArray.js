function getSumOfArray(numbers) {
    // console.log(numbers);

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]; // kono array er perticuler value pete chaile tokhn oi array namwe  + index name dile chilen asbe
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

//  for even or odd check
function getOddNumberOfArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index2 = i;
        const element2 = numbers[index2];
        // if (element2 % 2 === 0) // even number
        if (element2 % 2 !== 0) // odd number
        {
            console.log(index2, element2);
        }
    }
}


const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfArray(myNumbers);
getOddNumberOfArray(myNumbers);





// function getSumOfArray(numbers) {

//     // console.log(numbers); // show array list
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfArray(myNumbers);


// for (let i = 10; i > 1; i--) {
//     console.log(i);

// }