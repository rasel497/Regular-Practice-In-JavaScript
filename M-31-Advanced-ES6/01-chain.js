const users = [
    { id: 1, name: 'Abul Kalam', job: 'engineer' }
]
// console.log(users[0]);
// console.log(users[0].name);

const data = {
    count: 5005,
    data: [
        { id: 1, name: 'bulbul', job: 'leaderFirst' },
        { id: 2, name: 'dabul', job: 'leader' },
    ]
}
// console.log(data.data);
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas Alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            side: 'right side',
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
// const userFloor = user;
const userFloor = user.address.street.side;
console.log(userFloor);