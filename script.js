// Toggle mobile menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Scroll reveal animations for sections
ScrollReveal().reveal(".home-text", { 
    delay: 500, 
    origin: "left", 
    distance: "50px", 
    opacity: 0,
    duration: 1000 
});
ScrollReveal().reveal(".home-img", { 
    delay: 500, 
    origin: "right", 
    distance: "50px", 
    opacity: 0,
    duration: 1000 
});
ScrollReveal().reveal(".about-text", { 
    delay: 500, 
    origin: "bottom", 
    distance: "50px", 
    opacity: 0,
    duration: 1000 
});
ScrollReveal().reveal(".btn", { 
    delay: 800, 
    origin: "top", 
    distance: "50px", 
    opacity: 0,
    duration: 1000 
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    const header = document.querySelector("header");

    // Navbar background transition on scroll
    if (scrollPos > 50) {
        header.style.transition = "background-color 0.3s ease";
        header.style.backgroundColor = "#333";
    } else {
        header.style.transition = "background-color 0.3s ease";
        header.style.backgroundColor = "transparent";
    }

    // Apply scroll transition effect to sections (excluding footer)
    const sections = document.querySelectorAll("section:not(.contact)");
    sections.forEach(section => {
        if (scrollPos > section.offsetTop - 300) {
            section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateY(50px)";
        }
    });
});
