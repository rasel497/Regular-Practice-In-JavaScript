function maxNumberArray(numbers) {
    // console.log('array list: ', numbers);

    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const height = [167, 120, 120, 185, 137, 20];
const lowestMen = maxNumberArray(height);


console.log('tlowestMen or person  is: ', lowestMen, 'inches');