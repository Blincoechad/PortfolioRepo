document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});


// Get elements
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".clickable-image").forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src; // use the same image in overlay
  });
});

// Close overlay
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

//click outside the image closes overlay
overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

