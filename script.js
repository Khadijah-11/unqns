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

    // Navbar active class toggle
    const navbarItems = document.querySelectorAll('.nav h4');
    if (navbarItems.length > 0) {
        navbarItems.forEach((item) => {
            item.addEventListener('click', function () {
                navbarItems.forEach((navItem) => navItem.classList.remove('active'));
                this.classList.add('active');
            });
        });
    } else {
        console.warn('.nav h4 elements not found');
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
});
