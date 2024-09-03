const input = document.getElementById('inputText')
const button = document.getElementById('buttonText')

button.addEventListener('click', () => {
    localStorage.setItem('example', input.value)
})