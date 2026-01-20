### `js/components/footer.js`

```javascript
/**
 * Footer Component
 * Gestisce il modal info e altre funzionalità del footer
 */

function initFooter() {
    const modal = document.getElementById("infoModal");
    const btn = document.getElementById("infoBtn");
    const span = document.querySelector(".close-modal");

    if (!modal || !btn) return;

    // Apri modal
    btn.addEventListener('click', () => {
        modal.style.display = "block";
    });

    // Chiudi modal con X
    if (span) {
        span.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // Chiudi modal cliccando fuori
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initFooter };
}
```
