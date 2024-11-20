document.addEventListener('DOMContentLoaded', () => {
    
    // Custom cursor functionality
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        });

        document.querySelectorAll('a, .nav h4').forEach((element) => {
            element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    } else {
        console.warn('.cursor element not found');
    }

    // Gallery hover effect
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    if (galleryImages.length > 0) {
        galleryImages.forEach((img) => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'transform 0.5s ease';
            });
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });
    } else {
        console.warn('.gallery-grid img elements not found');
    }
    document.querySelectorAll('.carousel').forEach((carousel) => {
        let scrollAmount = 0;
        const scrollStep = 2; // Customize this value as needed
        const scrollInterval = setInterval(() => {
            carousel.scrollLeft += scrollStep;
            scrollAmount += scrollStep;
    
            // Loop carousel when end is reached
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                carousel.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 20); // Adjust interval timing for smoothness
    });
    
});
