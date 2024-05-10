const main = document.querySelector('.main');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    main.classList.toggle('dark');
})