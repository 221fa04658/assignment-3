const button = document.getElementById('toggleButton');
const container = document.getElementById('container');

button.addEventListener('click', function() {
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.textContent = 'Switch On';
        container.style.backgroundColor = '#ffffff';
    } else {
        button.classList.add('active');
        button.textContent = 'Switch Off';
        container.style.backgroundColor = '#FFEB3B';
    }
});
