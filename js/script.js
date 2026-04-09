// Sticky Header
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// Scroll Reveal
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightbox Logic
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeLightbox = document.querySelector('.close-lightbox');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const src = item.querySelector('img').src;
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Mobile Menu (Simple alert for this scope)
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click', () => {
    alert("Mobile navigation menu would expand here.");
});

// Form Submission Simulation
const form = document.getElementById('inquiry-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.innerText = "Sending...";
    
    setTimeout(() => {
        alert("Thank you! Your inquiry has been sent to Yatty's Creations.");
        btn.innerText = "Send Inquiry";
        form.reset();
    }, 1500);
});