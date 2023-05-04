const input1 = document.getElementById('input-1');
const text = document.querySelector('.text');

function updateText() {
    text.innerHTML = input1.value 
};

setInterval(updateText, 0);