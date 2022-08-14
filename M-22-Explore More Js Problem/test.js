



const mySelection = cheapestPhone(phones);
console.log(mySelection);



const friends = [
    { name: 'abul', friend: 'babul' },
    { name: 'babul', friend: 'abul' },
];

function isBestFriend(friends) {

    let cheapest = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const phone = friends[i];

        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

}

const isThereBest = isBestFriend(friends);
console.log(isThereBest);

** /

/*

function publicBusFare() {
    const i = 117;

    if (i <= 100) {
        // console.log('Going to Bus');

    }
    else {
        console.log('Need more bus');
    }

}

publicBusFare();

**/

/*
function publicBusFare(ticketQuantity) {

    // const first100Person = 2;
    // const second11Person = 1;

    const totalPublic = 117;
    const lessPerson = totalPublic - 6;

    const costPer = lessPerson * 250;

    return costPer;

}

const totalOutCost = publicBusFare(costPer);
console.log(totalOutCost);
**/