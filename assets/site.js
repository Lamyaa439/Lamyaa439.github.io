// Light / dark toggle. The choice is remembered on this device.
(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  function current() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function label() {
    button.setAttribute("aria-label", current() === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  label();

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
    document.dispatchEvent(new Event("themechange"));
  });
})();
