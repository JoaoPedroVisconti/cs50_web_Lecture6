

// Template for roll results
const template = Handlebars.compile("<li>You rolled a {{ value }}</li>");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#roll').onclick = () => {

        // Generate a random roll
        const roll = Math.floor((Math.random() * 6) + 1);

        // Add roll result to DOM
        const content = template({'value': roll});
        document.querySelector('#rolls').innerHTML += content;
    };
});