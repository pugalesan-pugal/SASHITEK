document.addEventListener("DOMContentLoaded", () => {
  const viewMoreButtons = document.querySelectorAll(".view-more-btn");
  const modal = document.getElementById("viewMoreModal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");

  // Open modal on View More button click
  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const info = button.getAttribute("data-info");
      const title = button.closest(".card").querySelector("h3").innerText;

      modalTitle.innerText = title;
      modalText.innerText = info;
      modal.style.display = "flex";
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
    });
  });

  // Close modal on close button click
  closeBtn.addEventListener("click", () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Allow time for fade-out
  });

  // Close modal on clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  });

  // Dark Mode Toggle
  const darkModeBtn = document.getElementById("darkmode");
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("active");
  });

  // Mobile menu toggle
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Initialize ScrollReveal
  ScrollReveal().reveal('.home-text', {
    delay: 200,
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 800,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.about-text', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 800,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.about-img', {
    delay: 300,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 800,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.services', {
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 800,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.connect-text', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 800,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.contact-box', {
    delay: 600,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 800,
    easing: 'ease-in-out'
  });

});
