// Problem: 03 - oilPrice

function oilPrice(diselPerLiter, petrolPerLiter, octenPerLiter) {

    const perDisel = 114;
    const perPetrol = 130;
    const perOcten = 135;

    const diselPrice = diselPerLiter * perDisel;
    const petrolPrice = petrolPerLiter * perPetrol;
    const octenPrice = octenPerLiter * perOcten;

    const totalPrice = diselPrice + petrolPrice + octenPrice;

    return totalPrice;
}

const totalPrice = oilPrice(1, 1, 1);
console.log(totalPrice);
