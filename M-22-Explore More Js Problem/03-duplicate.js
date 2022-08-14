const names = ['abul', 'babul', 'abrar', 'kayes', 'fahim', 'tasnim', 'raju', 'fahim', 'adiba', 'faraz', 'rasel', 'babul', 'abul'];

function removeDuplicate(names) {

    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
        // console.log(name);
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);