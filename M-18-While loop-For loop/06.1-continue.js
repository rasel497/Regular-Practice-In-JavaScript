// continue statment using for loop
// amra jod 50 condtion rekhe continue dei thle 50 er pore ar kono boro number show korbe na , mne 51 , 52, 53....n r kichu how korbe na.

var numbers = [45, 23, 55, 34, 49, 88, 75, 99];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}