// console.log('Append Js');

// create single element //

//01: where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);

//02: what to be added 
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

//03: add the child
placesList.appendChild(li);


// start create new section with add new elements //
//01: where to add
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer); //check console main show perfectly

//what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul'); ////ul start

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'mistiPanKhan';
ul.appendChild(li3);

section.appendChild(ul); //ul end add ul in section

mainContainer.appendChild(section);
// end create new section with add new elements //


// set innerHTML directly
// const sectionDress = document.createElement('section');
// sectionDress.innerHTML =
//     <><h1>My Dress section</h1><ul>

//         <li>T-shirt</li>
//         <li>Longi</li>
//         <li>Punjabi</li>

//     </ul></>

// mainContainer.appendChild(sectionDress);