window.addEventListener("load", function() {
    document.querySelector(".banner").classList.add("loaded");
    animateFeatures();
    addImageHoverAnimation();
});

function animateFeatures() {
    var features = document.querySelectorAll(".feature-item");
    var windowHeight = window.innerHeight;
    features.forEach(function(feature) {
        if (feature.getBoundingClientRect().top < windowHeight) {
            feature.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", function() {
    animateFeatures();
});

function addImageHoverAnimation() {
    const images = document.querySelectorAll('.feature-item img');
    images.forEach(image => {
        image.addEventListener('mouseover', () => enlargeImage(image));
        image.addEventListener('mouseout', () => resetImageSize(image));
    });
}

function enlargeImage(image) {
    image.style.transform = 'scale(1.05)';
    image.style.transition = 'transform 0.3s ease';
}

function resetImageSize(image) {
    image.style.transform = 'scale(1)';
}
