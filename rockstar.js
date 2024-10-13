let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function() {
    showNextSlide();
});

document.getElementById('prev').addEventListener('click', function() {
    showPrevSlide();
});

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
}

function showPrevSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
}

// Auto-slide functionality
setInterval(showNextSlide, 5000);

// Initialize the first slide
slides[currentIndex].classList.add('active');
