window.addEventListener('load', animateAboutSection);

function animateAboutSection() {
    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image');
    
    aboutContent.style.opacity = 0;
    aboutContent.style.transform = 'translateY(20px)';
    aboutImage.style.opacity = 0;
    aboutImage.style.transform = 'translateY(20px)';

    setTimeout(() => {
        aboutContent.style.transition = 'opacity 1s ease, transform 1s ease';
        aboutImage.style.transition = 'opacity 1s ease, transform 1s ease';
        
        aboutContent.style.opacity = 1;
        aboutContent.style.transform = 'translateY(0)';
        
        aboutImage.style.opacity = 1;
        aboutImage.style.transform = 'translateY(0)';

        const images = document.querySelectorAll('.about-image img');
        images.forEach(image => {
            image.addEventListener('mouseover', () => enlargeImage(image));
            image.addEventListener('mouseout', () => resetImageSize(image));
        });
    }, 100);
}

function enlargeImage(image) {
    image.style.transform = 'scale(1.05)';
    image.style.transition = 'transform 0.3s ease';
}

function resetImageSize(image) {
    image.style.transform = 'scale(1)';
}
