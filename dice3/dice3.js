

// Template for roll results
const template = Handlebars.compile(document.querySelector('#result').innerHTML);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#roll').onclick = () => {

        // Generate random rolls
        // Grab from the form (input) the number typed in
        const counter = parseInt(document.querySelector('#counter').value);
        const rolls = [];

        let total = 0;

        for (let i = 0; i < counter; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            rolls.push(value);
            total += value;
        };

        // Add roll result to DOM
        const content = template({'values': rolls, 'total': total});
        document.querySelector('#rolls').innerHTML += content;
    };
});