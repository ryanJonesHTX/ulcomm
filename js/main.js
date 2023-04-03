let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')

openMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})
