window.addEventListener("load", function() {
    animateMenuItems();
    addImageHoverAnimation();
});

function animateMenuItems() {
    var menuItems = document.querySelectorAll(".menu-item");
    var windowHeight = window.innerHeight;
    menuItems.forEach(function(menuItem) {
        if (menuItem.getBoundingClientRect().top < windowHeight) {
            menuItem.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", function() {
    animateMenuItems();
});

function addImageHoverAnimation() {
    const images = document.querySelectorAll('.menu-item img');
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
