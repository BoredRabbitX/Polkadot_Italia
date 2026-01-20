// script.js

// 1. Gestione Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (menuToggle) {
    menuToggle.onclick = (e) => {
        e.stopPropagation();
        navList.classList.toggle('active');
    };
}

document.addEventListener('click', () => {
    if (navList) navList.classList.remove('active');
});

// 2. Osservatore per animazioni al caricamento (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-section').forEach(s => observer.observe(s));

// 3. Logica Background Animato (Three.js)
// Assicurati che Three.js sia caricato nell'HTML prima di questo script
function initBackground() {
    const canvas = document.getElementById('gl-canvas');
    if (!canvas) return;
    // ... (inserire qui la logica Three.js presente nei tuoi file)
}
initBackground();
