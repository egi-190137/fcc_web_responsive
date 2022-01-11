const btn = document.getElementById('nav-bar-button');
const navBar = document.getElementById('nav-bar');

btn.addEventListener('click', () => {
    navBar.classList.toggle('active')
});