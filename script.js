// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Accordion FAQ Section
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        answer.classList.toggle('active');
        answer.style.maxHeight = answer.classList.contains('active') ? answer.scrollHeight + 'px' : '0';
    });
});

// Lightbox for Images
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.lightbox-image');
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.innerHTML = '';
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for validation
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');

    if (!name.value || !email.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can add code to submit the form via AJAX or another method
    alert('Form submitted successfully!');
});

// Dynamic Theme Toggle
const themeToggleButton = document.createElement('button');
themeToggleButton.innerHTML = 'Toggle Theme';
themeToggleButton.classList.add('theme-toggle');
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Loading Animation
const loader = document.createElement('div');
loader.classList.add('loader');
loader.innerHTML = 'Loading...';
document.body.appendChild(loader);

window.addEventListener('load', () => {
    loader.style.display = 'none'; // Hide the loader once the page is fully loaded
});

// Dynamic Year in Footer (from previous example)
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
