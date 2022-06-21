const header = document.querySelector('header')
const button = document.getElementById('button__color')

button.addEventListener('click', () => {
  header.classList.add('red-background','text-red')

});