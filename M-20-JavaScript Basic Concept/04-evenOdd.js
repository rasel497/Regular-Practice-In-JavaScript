function isEven(number) {

    const remainder = number % 2;
    if (remainder === 0) {
        // console.log('Numbber is even');
        return true;
    }
    else {
        // console.log('Nummber is oddd');
        return false;
    }
}


// isEven(120);
// isEven(111);

const myNumberIs = isEven(44);
// const myNumberIs2 = isEven(45);
console.log(myNumberIs);