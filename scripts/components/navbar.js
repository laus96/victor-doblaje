$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $("#navbarLinks").toggleClass("active");
    $(this).toggleClass("open");
  });

  $("#navbarLinks a").click(function () {
    $("#navbarLinks").removeClass("active");
    $(".nav-toggle").removeClass("open");
  });
});

/*$(window).on("scroll", function() {
    if ($(this).scrollTop() > 0) {
        $("#navbar").addClass("scrolled");
    } else {
        $("#navbar").removeClass("scrolled");
    }
});*/

let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

navToggle.addEventListener('click', () => {
  bars.forEach(bar => bar.classList.toggle('x'))
  navToggle.classList.toggle('open');
})