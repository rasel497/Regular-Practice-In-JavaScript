
function milesToKilo(miles) {

    const kilometer = miles * 1.609;
    return kilometer;
}

const myMilesIs = 25;
const myKiloIs = milesToKilo(myMilesIs);
console.log(myKiloIs);
