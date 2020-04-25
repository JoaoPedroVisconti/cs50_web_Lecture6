document.addEventListener('DOMContentLoaded', () => {

    // Start by loading the first page
    load_page('first');

    // Set links up to load new pages
    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = () => {
            load_page(link.dataset.page);
            return false;
        }
    });
});

// Update text on popping state
window.onpopstate = e => {
    const data = e.state;

    document.title = data.title;
    document.querySelector('#body').innerHTML = data.text;
};

function load_page(name) {
    const request = new XMLHttpRequest();
    request.open('GET', `/${name}`);
    request.onload = () => {
        const response = request.responseText;
        // .responseText whatever came back from the server

        document.querySelector('#body').innerHTML = response

        // Push state to URL
        document.title = name;

        // First Argument => Any data that want associated with this new URL
        // Second Argument => Title of the page that are been tried to push
        // Third Argument => The URL that are tried to push
        history.pushState({'title': name, 'text': response}, name, name);
    };

    request.send();
};