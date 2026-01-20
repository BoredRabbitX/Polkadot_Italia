(function () {
  window.PolkadotItalia = window.PolkadotItalia || {};

  function initNavbar() {
    var menuToggle = document.getElementById("mobile-menu");
    var navList = document.getElementById("nav-list");
    if (!menuToggle || !navList) return;

    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navList.classList.toggle("active");
    });

    document.addEventListener("click", function () {
      navList.classList.remove("active");
    });
  }

  window.PolkadotItalia.initNavbar = initNavbar;
})();

