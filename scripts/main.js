/*if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/scripts/service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch((err) => console.error("Error al registrar SW", err));
}
*/

async function loadComponent(id, url) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}
function initNavbar() {
  $(".nav-toggle").click(function () {
    $("#navbarLinks").toggleClass("active");
    $(this).toggleClass("open");
  });

  $("#navbarLinks a").click(function () {
    $("#navbarLinks").removeClass("active");
    $(".nav-toggle").removeClass("open");
  });

  let navToggle = document.querySelector('.nav-toggle');
  let bars = document.querySelectorAll('.bar');

  navToggle.addEventListener('click', () => {
    bars.forEach(bar => bar.classList.toggle('x'));
    navToggle.classList.toggle('open');
  });
}