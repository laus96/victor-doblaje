$(function () {

  const loadComponent = (id, url, callback) => {
    $('#' + id).load(url, () => {
      lucide.createIcons();
      if (callback) callback();
    });
  };

  const initNavbar = () => {
    const $toggle = $('.navbar__toggle');
    const $links = $('.navbar__links');
    $toggle.off('click');
    $links.find('a').off('click');
    $(document).off('click.navbarOutside');
    $(window).off('resize.navbarResize');

    $links.attr('data-collapsed', 'true');

    const toggleNavbar = () => {
      const isOpen = $links.hasClass('navbar__links--active');
      $toggle.toggleClass('navbar__toggle--open', !isOpen);
      $links.toggleClass('navbar__links--active', !isOpen)
        .attr('data-collapsed', isOpen ? 'true' : null);
    };

    $toggle.on('click', e => { e.preventDefault(); toggleNavbar(); });
    $links.on('click', 'a', () => { if ($(window).width() <= 768) toggleNavbar(); });
    $(document).on('click.navbarOutside', e => {
      if (
        !$toggle.is(e.target) &&
        $toggle.has(e.target).length === 0 &&
        !$links.is(e.target) &&
        $links.has(e.target).length === 0 &&
        $links.hasClass('navbar__links--active')
      ) toggleNavbar();
    });
    $(window).on('resize.navbarResize', () => {
      if ($(window).width() > 768 && $links.hasClass('navbar__links--active')) toggleNavbar();
    });
  };
  const initFooter = () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  };

  /*GITHUB CHANGES*/
  [
    { id: 'navbar', url: '/victor-doblaje/components/navbar.html', callback: initNavbar },
    { id: 'footer', url: '/victor-doblaje/components/footer.html', callback: initFooter },
    { id: 'aviso', url: '/victor-doblaje/sections/aviso-legal/cookies.html' },

    /*{ id: 'navbar', url: '/components/navbar.html', callback: initNavbar },
    { id: 'footer', url: '/components/footer.html', callback: initFooter },
    { id: 'aviso', url: '/sections/aviso-legal/cookies.html' },*/
  ].forEach(c => loadComponent(c.id, c.url, c.callback));


});
