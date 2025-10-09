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

    // Reset
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
      if (!$toggle.is(e.target) && $toggle.has(e.target).length === 0 &&
          !$links.is(e.target) && $links.has(e.target).length === 0 &&
          $links.hasClass('navbar__links--active')) {
        toggleNavbar();
      }
    });

    $(window).on('resize.navbarResize', () => { if ($(window).width() > 768) $links.hasClass('navbar__links--active') && toggleNavbar(); });
  };

  [
    { id: 'navbar', url: '/victor-doblaje/components/navbar.html', callback: initNavbar },
    { id: 'hero', url: '/victor-doblaje/sections/landing/hero.html' },
    { id: 'services', url: '/victor-doblaje/sections/landing/services.html' },
    { id: 'demos', url: '/victor-doblaje/sections/landing/demos.html' },

    /* Local
    { id: 'navbar', url: '/components/navbar.html', callback: initNavbar },
    { id: 'hero', url: '/sections/landing/hero.html' },
    { id: 'services', url: '/sections/landing/services.html' },
    { id: 'demos', url: '/sections/landing/demos.html' },*/
  ].forEach(c => loadComponent(c.id, c.url, c.callback));
});

