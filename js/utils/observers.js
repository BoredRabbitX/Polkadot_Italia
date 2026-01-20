(function () {
  window.PolkadotItalia = window.PolkadotItalia || {};

  function observeFadeSections(opts) {
    var threshold = (opts && opts.threshold) || 0.1;
    var selectors = (opts && opts.selectors) || [".fade-section"];

    if (!("IntersectionObserver" in window)) {
      selectors.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (el) {
          el.classList.add("visible");
        });
      });
      return null;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: threshold }
    );

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        observer.observe(el);
      });
    });

    return observer;
  }

  window.PolkadotItalia.observeFadeSections = observeFadeSections;
})();

