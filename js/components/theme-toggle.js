(function () {
  window.PolkadotItalia = window.PolkadotItalia || {};

  function setThemeIcon(isLight) {
    var icon = document.getElementById("theme-icon");
    var btn = document.getElementById("theme-btn");
    var val = isLight ? "☾" : "☀";
    if (icon) icon.innerText = val;
    else if (btn) btn.innerText = val;
  }

  function initThemeToggle(opts) {
    var btn = document.getElementById("theme-btn");
    if (!btn) return;

    var remember = !(opts && opts.remember === false);
    var storageKey = (opts && opts.storageKey) || "polkadotItaliaTheme";

    function apply(isLight) {
      document.body.classList.toggle("light-mode", Boolean(isLight));
      setThemeIcon(Boolean(isLight));
      if (
        window.PolkadotItalia &&
        typeof window.PolkadotItalia.setNoiseLightMode === "function"
      ) {
        window.PolkadotItalia.setNoiseLightMode(Boolean(isLight));
      }
      if (remember) {
        try {
          window.localStorage.setItem(storageKey, isLight ? "light" : "dark");
        } catch (_) {}
      }
    }

    if (remember) {
      try {
        var saved = window.localStorage.getItem(storageKey);
        if (saved === "light") apply(true);
        else if (saved === "dark") apply(false);
      } catch (_) {}
    }

    btn.addEventListener("click", function () {
      var isLight = !document.body.classList.contains("light-mode");
      apply(isLight);
    });
  }

  window.PolkadotItalia.initThemeToggle = initThemeToggle;
})();

