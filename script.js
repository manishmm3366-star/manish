// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});


// Close Menu After Click
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });

});


// Typing Effect
const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Python Developer",
    "AI Enthusiast",
    "YouTube Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


// Dark / Light Theme
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    contactForm.reset();

});