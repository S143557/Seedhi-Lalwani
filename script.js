// Toggle Light/Dark Mode
const themeIcon = document.querySelector('#theme-icon');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}

if (themeIcon) {
    themeIcon.classList.toggle('bx-sun', savedTheme === 'light');
    themeIcon.classList.toggle('bx-moon', savedTheme !== 'light');
}

themeIcon?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('portfolio-theme', isLightMode ? 'light' : 'dark');

    if (isLightMode) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});

// Toggle Mobile Navigation Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking a navigation link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon?.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Typing Animation Effect
const roles = ["Problem-Solver", "Python Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.multiple-text');

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

if (typingElement) {
    document.addEventListener('DOMContentLoaded', typeEffect);
}