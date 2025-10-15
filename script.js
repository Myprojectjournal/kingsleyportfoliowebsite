// Animate gallery items on scroll
const galleryItems = document.querySelectorAll(".gallery-item");

function animateGallery() {
  const triggerBottom = window.innerHeight * 0.85;

  galleryItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animateGallery);
animateGallery(); // trigger once on load
