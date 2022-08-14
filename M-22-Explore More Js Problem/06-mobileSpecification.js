
const phones = [
    { name: 'Samsung', camera: 12, strorage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 35000, color: 'silver' },
    { name: 'iphone', camera: 13, strorage: '32gb', price: 89000, color: 'silver' },
    { name: 'Xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 12, strorage: '32gb', price: 20000, color: 'silver' },
    { name: 'Nokia', camera: 10, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'Huwei', camera: 10, storage: '32gb', price: 2000, color: 'silver' },

];

function cheapestPhone(phones) {

    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];

        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);