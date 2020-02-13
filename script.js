
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// function nextSlide () {
//     current.classList.remove('current');
//     if(current.nextElementSibling) {
//         current.nextElementSibling.classList.add('current');
//     } else {
//         slides[0].classList.add('current');
//     }
// }

// function prevSlide () {
//     current.classList.remove('current');
//     if(current.previousElementSibling) {
//         current.previousElementSibling.classList.add('current');
//     } else {
//         slides[slides.length - 1].classList.add('current');
//     }
// }

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
}

const prevSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // check for next slide
    if(current.previousElementSibling) {
        // add current to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to last
        slides[slides.length - 1].classList.add('current'); // since you don't know the index number input slides.length -1
    }
}

// Button Events
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});