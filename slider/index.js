const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;
console.log(slideIndex)

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    } else {
        window.alert("Add some slides")
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex++;
    console.log(slideIndex)
    showSlide(slideIndex);

}


function nextSlide() {
    slideIndex++;
    console.log(slideIndex)
    showSlide(slideIndex);

}