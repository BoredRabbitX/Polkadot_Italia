### `js/components/navbar.js`

```javascript
/**
 * Navbar Component
 * Gestisce il menu di navigazione e hamburger mobile
 */

function initNavbar() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (!menuToggle || !navList) return;

    // Toggle menu mobile
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navList.classList.toggle('active');
    });

    // Chiudi menu cliccando fuori
    document.addEventListener('click', () => {
        navList.classList.remove('active');
    });

    // Previeni chiusura quando si clicca sul menu stesso
    navList.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Export per uso modulare
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initNavbar };
}
```
