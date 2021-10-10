const card = document.getElementById('card');

document.getElementById('flipformbutton').addEventListener('click', function() {
    card.classList.toggle('formisflipped');
}, false);

document.getElementById('flipformsecondbutton').addEventListener('click', function() {
    card.classList.toggle('formisflipped');
}, false);