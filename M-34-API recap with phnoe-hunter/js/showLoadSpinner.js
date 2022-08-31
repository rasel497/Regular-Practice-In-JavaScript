const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);

}

const displayPhones = phones => {

    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.textContent = '';
    // using slice show 20 phones in display
    phones = phones.slice(0, 5);

    //display no phone foound
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
                 <img src="${phone.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.slug}</p>
                 </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })

    //stop spinner or loader toggle 
    toggleSpinner(false);
}

// part-02 show website search phone by btn id in eventHandler
document.getElementById('btn-search').addEventListener('click', function () {
    //start loader spinner
    toggleSpinner(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // ekhon amra loadPhones function a searchText prametar hisebe pass korbo 
    // And url take dynamically search= ${serch} add korbp
    loadPhones(searchText);
})

// toggle spinners
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


// loadPhones();