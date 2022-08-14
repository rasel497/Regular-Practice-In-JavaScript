function publicBusFare(pasengers) {

    if (typeof (pasengers) === 'number') {
        if (pasengers >= 0) {
            const afterBusLeft = pasengers % 50;
            const afterMircoBusLeft = afterBusLeft % 11;
            const totalPublicBusFare = afterMircoBusLeft * 250;

            return totalPublicBusFare;
        }
        return 'error: you can not take any negative input';
    }
    return 'error: your input value is not valid';
}

// const fairCost = publicBusFare(117);
// console.log(fairCost);