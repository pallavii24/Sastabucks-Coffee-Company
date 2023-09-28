const btn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');


    btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
});
