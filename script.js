// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with fade-in class
    const animatedElements = document.querySelectorAll('.fade-in');
    
    // Add slightly delayed animation for grid items
    animatedElements.forEach((el, index) => {
        // Only stagger project cards
        if (el.classList.contains('project-card')) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }
        observer.observe(el);
    });
});
