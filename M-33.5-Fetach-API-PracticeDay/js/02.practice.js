
const loadWebsite = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(res => res.json())
        .then(data => showDisplay(data));
}

const showDisplay = comment => {

    const commentContainer = document.getElementById('comment');
    console.log(comment);
    commentContainer.inner = comment.comment;

}





// loadWebsite();