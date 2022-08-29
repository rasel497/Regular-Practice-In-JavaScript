const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}
// function called

const displayUsers = users => {
    const userConatianer = document.getElementById('users-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user'); // for css style
        userDiv.innerHTML = `
        <h3>User Name: </h3>
        <p>Email: ${user.email}</p>
        <p>User Location: ${user.location.city} ${user.location.city}</p>
        <p>User Info: </p>

        `;
        userConatianer.appendChild(userDiv)
    }
}


loadUsers();