
const loadWebData = () => {
    const url = 'https://randomuser.me/api/?results=50'
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeb(data.results))
}

const displayWeb = (users) => {

    const commentContainer = document.getElementById('comment-container');
    for (const user of users) {
        console.log(user);
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `

        <h3>Name: ${user.name}</h3>
        <p>E-mail: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        <p>User Location: ${user.location.city} ${user.location.city}</p>

        `;

        commentContainer.appendChild(commentDiv);
    }


}

loadWebData();
