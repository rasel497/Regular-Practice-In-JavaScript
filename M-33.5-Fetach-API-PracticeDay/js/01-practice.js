const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => console.log(data));
}


loadUsers();