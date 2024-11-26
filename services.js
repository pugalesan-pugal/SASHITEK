// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {

    // Smooth Scroll for the "Back" button
    const backButton = document.querySelector(".back-button");
    if (backButton) {
        backButton.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent the default link behavior
            const targetHref = backButton.getAttribute("href");

            // Redirect to the specified href
            if (targetHref) {
                window.location.href = targetHref;
            }
        });
    }

    // Hover Effects for Cards
    const cards = document.querySelectorAll(".cards .card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Adjust Font Size Dynamically
    const adjustFontSize = () => {
        const width = window.innerWidth;

        const title = document.querySelector(".content h1");
        if (title) {
            title.style.fontSize = width > 1200 ? "3rem" : width > 900 ? "2.5rem" : "2rem";
        }

        const paragraph = document.querySelector(".content p");
        if (paragraph) {
            paragraph.style.fontSize = width > 900 ? "1rem" : "0.85rem";
        }
    };

    // Adjust font size on window resize
    window.addEventListener("resize", adjustFontSize);
    adjustFontSize(); // Initial font size adjustment

    // Circle Animation on Scroll
    const circle = document.querySelector(".circle");
    if (circle) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            circle.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    }
});
