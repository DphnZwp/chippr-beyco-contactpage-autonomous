const card = document.getElementById('card');

document.getElementById('flipFormButton').addEventListener('click', function() {
    card.classList.toggle('formIsFlipped');
}, false);

document.getElementById('flipFormSecondButton').addEventListener('click', function() {
    card.classList.toggle('formIsFlipped');
}, false);