const openMenu = document.querySelector('#open-menu-btn')
const closeMenu = document.querySelector('#close-menu-btn')
const menu = document.querySelector('.nav_menu')


//open nav menu
openMenu.addEventListener('click', () => {
    menu.style.display = 'block'
    closeMenu.style.display = 'inline-block'
    openMenu.style.display = 'none'
})


//close nav menu
const closeNav = () => {
    menu.style.display = 'none'
    closeMenu.style.display = 'none'
    openMenu.style.display = 'inline-block'
}
closeMenu.addEventListener('click', closeNav)