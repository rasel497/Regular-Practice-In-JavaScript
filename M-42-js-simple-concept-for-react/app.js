const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;





// let shukriya = ['subahanAllah', 'Alhmdulillah', 'Allah hu Akbar'];

document.getElementById("btn-click").addEventListener('click', function () {
    const liContainer = document.getElementById("liContainer");
    const getData = document.createElement("li");
    getData.innerText = `
    'subahanAllah', 'Alhmdulillah', 'Allah hu Akbar'
    `;

    liContainer.appendChild(getData);
})


function firstBtn() {
    // const para = document.getElementById("para");
    // const listOfLi = ;
    // const createElement = document.createElement("li");
    para.innerHTML = `
    <p>Lorem ipsum dolor sit amet.</p>
    `;
    // para.appendChild();
}



// Create element:
const container = document.getElementById("myDIV");
const pTag = document.createElement("li");
pTag.innerHTML = `This is a paragraph.`;

// Append to another element:
container.appendChild(pTag);