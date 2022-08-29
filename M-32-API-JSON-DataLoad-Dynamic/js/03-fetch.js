
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())// .json is not similer but close to JSON.prase
    .then(json => console.log(json))
*/

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response))
*/

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))


function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}