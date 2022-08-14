function maxNumberArray(numbers) {
    // console.log('array list: ', numbers);

    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if (element > largest)
        //(element > largest) // lowest number
        {
            largest = element;
        }
    }
    return largest;
}

const height = [167, 120, 120, 185, 137, 20];
const tallest = maxNumberArray(height);


console.log('tallest person  is: ', tallest);