// Get modal and related elements
const modal = document.getElementById("myModal");
const modalText = document.querySelector(".modal-text");
const modalImage = document.querySelector(".modal-image");
const closeBtn = document.querySelector(".close-btn");

// Function to open modal with appropriate content and optional image
const openModal = (content, imgSrc = null) => {
  modalText.textContent = content;

  if (imgSrc) {
    modalImage.src = imgSrc;
    modalImage.style.display = "block"; // Show the image
  } else {
    modalImage.style.display = "none"; // Hide the image if not provided
  }

  modal.style.display = "flex";  // Show the modal
  setTimeout(() => {
    modal.querySelector(".modal-content").style.opacity = 1; // Fade in the modal content
    modal.querySelector(".modal-content").style.transform = "scale(1)"; // Scale to normal size
  }, 10);
};

// Function to close modal with transition
const closeModal = () => {
  const modalContent = modal.querySelector(".modal-content");
  modalContent.style.opacity = 0;  // Fade out content
  modalContent.style.transform = "scale(0.95)";  // Scale down

  // Wait for the fade-out effect to complete before hiding the modal
  setTimeout(() => {
    modal.style.display = "none"; // Hide the modal completely
  }, 300);  // Match the duration of the transition
};

// Event listener for the close button
closeBtn.addEventListener("click", closeModal);

// Event listener to close modal if user clicks outside of the modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Event listeners for the "View More" buttons
const viewMoreButtons = document.querySelectorAll(".view-more-btn");
viewMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.getAttribute("data-info");
    const imgSrc = button.getAttribute("data-img"); // Get image URL if provided
    openModal(content, imgSrc);
  });
});
