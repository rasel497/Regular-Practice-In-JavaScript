const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tmy dekhte parini. kala kala sada sada rong jomese sada kala';


console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));


if (lyrics.indexOf('sada') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('can not find the string');
}

// startsWith starting word ta ki Tumi diye start check??

console.log(lyrics.startsWith('kala'));

//endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf');