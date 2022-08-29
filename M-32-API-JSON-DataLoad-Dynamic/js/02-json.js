const user = { id: 111, name: 'Rasel', job: 'Web Developer' };
const stringfed = JSON.stringify(user);

// console.log(user); // normal
// console.log(stringfed); // stringgify

//shop complex

const shop = {
    owner: 'Alia',
    address: {
        street: ' kochukhet vootr goli',
        city: 'dhaka',
        country: 'baangladesh'
    },
    products: ['laptop', 'microphone', 'mouse', 'keyboard'],
    revenue: 555000,
    isOpen: true,
    isNew: false
}

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// JSON stringify to Prase string
const shopObj = JSON.parse(shopJSON);
console.log('Back string prase: ', shopObj);
