const btn = document.getElementById('nav-bar-button');
const nav = document.querySelector('#navbar ul');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
})