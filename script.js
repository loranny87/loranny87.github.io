let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel .slide');
    currentSlide += step;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Si es el primer slide, va al último
    }
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Si es el último slide, va al primero
    }
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel .slide');
    const offset = -currentSlide * 100; // Desplaza el carrusel para mostrar el slide actual
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Cambiar de slide automáticamente cada 4 segundos
setInterval(() => {
    moveSlide(0);
}, 4000);
