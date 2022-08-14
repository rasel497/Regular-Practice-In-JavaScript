
function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }

    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuentity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuentity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;

        return totalPrice;
    }
    else {

        const first100price = 100 * first100Rate;
        const second100price = 100 * second100Rate;
        const restTicketQuentity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuentity * restTicketRate;


        const totalCost = first100price + second100price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(100);
console.log('price', price);
