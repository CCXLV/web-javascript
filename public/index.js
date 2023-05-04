const input = document.getElementById('input');
const text = document.querySelector('.text');

function updateText() {
    text.innerHTML = input.value 
};

setInterval(updateText, 0);