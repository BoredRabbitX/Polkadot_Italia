(function () {
  window.PolkadotItalia = window.PolkadotItalia || {};

  function initFooterModal() {
    var modal = document.getElementById("infoModal");
    var btn = document.getElementById("infoBtn");
    var close = document.getElementsByClassName("close-modal")[0];

    if (!modal || !btn || !close) return;

    btn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    close.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  window.PolkadotItalia.initFooterModal = initFooterModal;
})();

