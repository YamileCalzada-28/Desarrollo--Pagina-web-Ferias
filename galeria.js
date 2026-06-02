const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let index = 0;

function openLightbox(i) {
    index = i;
    lightbox.style.display = "flex";
    lightboxImg.src = images[index].src;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function nextImage() {
    index = (index + 1) % images.length;
    lightboxImg.src = images[index].src;
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    lightboxImg.src = images[index].src;
}

