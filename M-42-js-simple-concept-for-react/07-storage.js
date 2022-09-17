const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const idValue = document.getElementById('storage-value');
    const value = idValue.value;


    // condition use korate ekhon r kichu na lekhe empty space add hbe na
    if (id && value) {
        localStorage.setItem(id, value);
    }
    // localStorage.setItem(id, value);
    idInput.value = '';
    idValue.value = '';
}

// localStorage.setItem('sm-a30s', JSON.stringify([8500, 9500]));
// localStorage.setItem('pen', JSON.stringify(pen));