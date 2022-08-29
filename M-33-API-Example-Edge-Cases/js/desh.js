const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data));
}

const displayCountries = countries => {
    //     for (const country of countries) {
    //         console.log(country);
    //     }
    const countriesContainer = document.getElementById('country-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');

        countryDiv.innerHTML = `
        <h3>Name: </h3>
        
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

loadCountries();