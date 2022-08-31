// create objetcs using objects literals
const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';

player.bat = function () {
    console.log('swing your bat');

}

console.log(player);
player.bat();