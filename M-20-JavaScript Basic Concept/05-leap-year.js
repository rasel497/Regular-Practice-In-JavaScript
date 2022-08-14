function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        console.log('Its leap Year', year); // comma diye year lekha te sathe year show korbe 
        // return true;
    }
    else {
        console.log('Its not a leap year', year);
        // return false
    }
}

// const isMyYear = isLeapYear(1997);
// console.log(isMyYear);
isLeapYear(1997);

// const isHerYear = isLeapYear(2000);
// console.log(isHerYear);
isLeapYear(1960);