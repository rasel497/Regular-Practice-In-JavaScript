const loadMeals = (search) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayeMeals(data.meals));
}

const displayeMeals = meals => {

    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``; // rest/clear previous search

    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col'); // bootstrp css style
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>

        `;
        mealsContainer.appendChild(mealDiv);
    })
}

// search food
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log('searching..', searchText);
    loadMeals(searchText);
}

// loadMealDetail id,.. etc
const loadMealDetail = (idMeal) => {
    // console.log('get details of id', idMeal);
    const url = `https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    //dynamically set id + click console show wow urls and id of meal
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]));
}

//displayDetails
const displayDetails = meal => {
    console.log(meal);


    // single card
    const detailContainer = document.getElementById('detail-container')
    detailContainer.innerHTML = ``; //rest

    const mealDiv = document.createElement('div')
    mealDiv.classList.add('card'); // btstrp css
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>

`;
    detailContainer.appendChild(mealDiv);


}


// loadMeals('a'); // sob show kobe new search gula ekbare nise show korbe tai comment kore raksi
loadMeals(''); // empty string nholee sob card pabo