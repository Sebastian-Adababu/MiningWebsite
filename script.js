// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const animateElements = document.querySelectorAll('.animate-fadeInUp');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// Hero section button functionality
document.addEventListener('DOMContentLoaded', function() {
    const quoteButton = document.querySelector('.hero-buttons .btn-primary');
    const projectsButton = document.querySelector('.hero-buttons .btn-outline-light');
    const servicesButton = document.querySelector('.hero-buttons .btn-secondary');

    quoteButton.addEventListener('click', function() {
        alert('Thank you for your interest! Please fill out the contact form below for a custom quote.');
    });

    projectsButton.addEventListener('click', function() {
        alert('Exploring our featured mining projects...');
    });

    servicesButton.addEventListener('click', function() {
        alert('Discovering our comprehensive mining services...');
    });
});
