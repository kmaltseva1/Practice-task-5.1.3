new Swiper ('.brands__container', {
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination", 
        clickable: true,
    },
    breakpoints: {
        768: {
        initialSlide: 0, 
        spaceBetween: 0, 
        enabled: false
        }
    }
});

const content = document.querySelector('.brands__container');
const button = document.querySelector('.brands__btn');
button.addEventListener('click', function () {
    const hasClass = content.matches('.content-height--l');
    content.classList.toggle('content-height--l');
    button.textContent = hasClass ? 'Показать всё' : 'Скрыть'
    button.classList.toggle('read-more--click');
})

