var arrNumber = [12, 15, 23, 25, 36, 55, 99]


// get element by index
//console.log(arrNumber[3]);
var element = arrNumber[3];
console.log(element);


// set/add new element of arrNumber
arrNumber[1] = 777; // now index [1] of 15 position change to 77
arrNumber[3] = 444;
console.log('update aary: ', arrNumber);

// find total array element
console.log('arrylength: ', arrNumber.length);


// find index of an element
var positionIndex = arrNumber.indexOf(99);
console.log('positionIndex: ', positionIndex);
