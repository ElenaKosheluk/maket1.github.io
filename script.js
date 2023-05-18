const footerYearEl = document.querySelector('.footer_year');
let today = new Date();
let year = today.getFullYear();
const faEl = document.querySelector('.fa-bars-staggered');
const navigationEl = document.querySelector('.navigation');
const closeEl = document.querySelector('.fa-xmark');

footerYearEl.textContent = year;
faEl.addEventListener('click', function (e){
    navigationEl.style.left = 0;
})
closeEl.addEventListener('click', function (e){
    navigationEl.style.left = '-100%';
})

