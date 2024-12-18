let openPopup = document.getElementById('openMenu')
let closePopup = document.getElementById('closePopup')
let overlay = document.querySelector('.overlay')

openPopup.addEventListener('click', () => {
    overlay.classList.toggle('hidden')
})

closePopup.addEventListener('click', () => {
    overlay.classList.toggle('hidden')
})