### `js/main.js`

```javascript
/**
 * Main JavaScript
 * Inizializza tutti i componenti
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inizializza componenti
    if (typeof initNavbar === 'function') initNavbar();
    if (typeof initFooter === 'function') initFooter();
    if (typeof initThemeToggle === 'function') initThemeToggle();
    
    // Inizializza noise canvas se Three.js è disponibile
    if (typeof THREE !== 'undefined' && typeof initNoiseCanvas === 'function') {
        initNoiseCanvas();
    }
    
    // Inizializza observers
    if (typeof initFadeObserver === 'function') initFadeObserver();
    if (typeof initStatsObserver === 'function') initStatsObserver();
    
    // Animazioni specifiche per pagina
    if (typeof initSubtitleRotation === 'function') {
        initSubtitleRotation();
    }
});
```
