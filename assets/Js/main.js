/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu')
// const navToggle = document.getElementById('nav-toggle');
const navClose = document.querySelector('#nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
function showMenu() {
    navMenu.classList.add('show-menu');
}

/*===== MENU HIDDEN =====*/

/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/

window.addEventListener('scroll', () => {
    const haeder = document.querySelector('#header');

    if (this.scrollY >= 100)
        haeder.classList.add('scroll-header');
    else
        haeder.classList.remove('scroll-header');
})