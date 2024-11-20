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
        // Set initial active state based on current page
        const currentPath = window.location.pathname;
        navbarItems.forEach((item) => {
            const link = item.querySelector('a');
            if (link && link.getAttribute('href') === currentPath) {
                item.classList.add('active');
            }
        });

        // Handle click events
        navbarItems.forEach((item) => {
            if (!item.classList.contains('unqns')) {
                item.addEventListener('click', function() {
                    navbarItems.forEach((navItem) => {
                        if (!navItem.classList.contains('unqns')) {
                            navItem.classList.remove('active');
                        }
                    });
                    this.classList.add('active');
                });
            }
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
