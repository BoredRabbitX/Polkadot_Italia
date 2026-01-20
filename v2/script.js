// --- MENU LOGIC ---
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if(menuToggle) {
    menuToggle.onclick = () => nav.classList.toggle('active');
}

// --- FADE OBSERVER ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if(entry.target.classList.contains('stats-container')) startCounters();
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-section').forEach(s => observer.observe(s));

// --- COUNTERS (per pagina Tecnologia) ---
function startCounters() {
    document.querySelectorAll('.count').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const update = () => {
            if (count < target) {
                count += target / 50;
                counter.innerText = Math.ceil(count);
                setTimeout(update, 30);
            } else counter.innerText = target;
        };
        update();
    });
}

// --- SUBTITLES HERO (per Home) ---
const subs = document.querySelectorAll('.subtitle-item');
if(subs.length > 0) {
    let currentSub = 0;
    setInterval(() => {
        subs[currentSub].classList.remove('active');
        currentSub = (currentSub + 1) % subs.length;
        subs[currentSub].classList.add('active');
    }, 4000);
}

// --- THREE.JS BACKGROUND ---
// [Qui va la logica del vertexShader e fragmentShader estratta dai tuoi file]
// Inizializza renderer, scena e camera come nei tuoi originali...
