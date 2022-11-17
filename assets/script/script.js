const navButton = document.querySelector('.toggle-menu')
const openIcon = document.querySelector('.open-icon')
const closeIcon = document.querySelector('.close-icon')

const menu = document.querySelector('.header-container nav')
const links = document.querySelectorAll('nav li a')

navButton.addEventListener('click', () => {
    menu.classList.toggle('show')
    openIcon.classList.toggle('active')
    closeIcon.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('show')
        openIcon.classList.toggle('active')
        closeIcon.classList.toggle('active')
    })
})