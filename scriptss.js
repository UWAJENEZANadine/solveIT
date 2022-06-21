const header = document.querySelector('h1');
const button = document.getElementById('button__color');

button.addEventListener('click', () => {
  header.classList.add('text-red')

});