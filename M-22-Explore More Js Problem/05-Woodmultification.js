

function woodCalculator(chairQuentity, tabelQuentity, almeraQuentity) {

    const perchair = 15;
    const perTabel = 119;
    const perAlmera = 75;

    const chairWood = chairQuentity * perchair;
    const tabelWood = tabelQuentity * perTabel;
    const almeraWood = almeraQuentity * perAlmera;

    const totalWood = chairWood + tabelWood + almeraWood;
    return totalWood;
}

const totalWood = woodCalculator(0, 1, 0);

console.log(totalWood);