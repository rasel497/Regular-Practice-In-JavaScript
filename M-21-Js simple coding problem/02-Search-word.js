const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tmy dekhte parini. kala kala sada sada rong jomese sada kala';

/*
const doesExit = lyrics.includes('pakhi');
// search word Yes true Not false
console.log(doesExit); **/

const searchString = 'pakhi33';
/*
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExit = lyrics.includes(searchString);

const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

**/

// total online
// const searchString6 = 'kala';

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExistOneLine);
// console.log(doesExist);