
const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tmy dekhte parini. kala kala sada sada rong jomese sada kala';
;

const parts = lyrics.split(' '); // protita sentence array akare asbe
const sentences = lyrics.split('.'); // protita sentence niche niche asbe
const charcter = lyrics.split(''); // protita single charcter asbe

const partial = lyrics.slice(5, 9); // 5index thke start 9index end




console.log(parts);
console.log(sentences);
// console.log(charcter);
console.log(partial);



const lines = [
    'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tmy dekhte parini. kala kala sada sada rong jomese sada kala'
]; // eikhne ami  dot , comma, semicolon etc diye join korte parbo.
const newSong = lines.join(' . ');
console.log(newSong);

