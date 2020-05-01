
// Start with first post
let counter = 1;

// Load posts 20 at time
const quantity = 20;

// When DOM loads, render the first 20 posts
document.addEventListener('DOMContentLoaded', load);

// If scrolled to bottom, load the next 20 post
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load()
    }
}

function load() {

    // Set start and end post numbers, and update counter
    const start = counter;
    const end = start + quantity - 1;
    counter = end +1;

    // Open new request to get new posts
    const request = new XMLHttpRequest();
    request.open('POST', '/posts');
    request.onload = () =>  {
        const data = JSON.parse(request.responseText);
        data.forEach(add_post);     
    };

    // Add start end points to request data
    const data = new FormData();
    data.append('start', start);
    data.append('end', end);

    // Send request
    request.send(data);

};

// Add a new post with given content to DOM
function add_post(contents) {
    
    // Create new post
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = contents;

    // Add button to hide post
    const hide = document.createElement('button');
    hide.className = 'hide';
    hide.innerHTML = 'Hide';
    post.append(hide);

    // When hide button is clicked
    hide.onclick = function() {
        this.parentElement.remove();
    };

    // Add post to DOM
    document.querySelector('#posts').append(post);
};