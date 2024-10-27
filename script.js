// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to open and close modals
window.onclick = function(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
        event.target.closest('.modal').style.display = "none";
    }
};

// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// AOS initialization for animations
// Close modal when clicking outside the content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// AOS initialization for animations
// AOS initialization
AOS.init({
    duration: 1200, // Duration of animation in milliseconds
    easing: 'ease-in-out', // Easing function
    once: false, // Ensure animations happen when scrolling both ways (down and up)
    mirror: true, // Mirror the animation when scrolling back up
  });
  


