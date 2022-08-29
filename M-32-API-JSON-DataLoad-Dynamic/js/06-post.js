/* 
  1. get the container element where you want to add the new elemnts
  2. create child elemnt
  3. set innerText or innerHtml
  4. appendChild

 */

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')

        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {

    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post'); // post css style bg color
        console.log(post);
        postDiv.innerHTML = `
        <h4>User:  ${post.userId}</h4>
        <h5>Post:  ${post.title}</h5>
        <p>Post Description:  ${post.body}<p>
        
       `;
        postsContainer.appendChild(postDiv);
    }
}

loadPost();

// https status code 404 server not found,, 200ok
// 6: 11se



