$(function () {

  const loadComponent = (id, url, callback) => {
    $('#' + id).load(url, () => {
      lucide.createIcons();
      if (callback) callback();
    });
  };

  const initDemos = () => {
    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".demo-card");
    const grid = document.querySelector('.demos__grid');

    const players = Array.from(document.querySelectorAll('.plyr-player')).map(video => {
      return new Plyr(video, {
        controls: ['play', 'progress', 'mute', 'volume', 'fullscreen'],
        disableContextMenu: true
      });
    });

    const updateDemoGridLayout = () => {
      const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
      grid.classList.remove('one-demo', 'two-demos', 'single-demo');
      if (visibleCards.length === 1) {
        grid.classList.add('single-demo');
      } else if (visibleCards.length === 2) {
        grid.classList.add('two-demos');
      } else {
        grid.classList.add('two-demos');
      }
    };

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const category = tab.dataset.tab;
        cards.forEach(card => {
          card.style.display =
            category === "all" || card.dataset.category === category
              ? "block"
              : "none";
        });

        players.forEach(player => player.pause());

        updateDemoGridLayout();
      });
    });

    updateDemoGridLayout();

    players.forEach(player => {
      player.on('play', () => {
        players.forEach(p => { if (p !== player) p.pause(); });
      });
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
  /*[
    { id: 'navbar', url: '/components/navbar.html', callback: initNavbar },
    { id: 'footer', url: '/components/footer.html', callback: initFooter },
    { id: 'hero', url: '/sections/landing/hero.html' },
    { id: 'services', url: '/sections/landing/services.html' },
    { id: 'demos', url: '/sections/landing/demos.html', callback: initDemos },
    { id: 'contact', url: '/sections/landing/contact.html' },
  ].forEach(c => loadComponent(c.id, c.url, c.callback));*/
  [
    { id: 'navbar', url: '/victor-doblaje/components/navbar.html', callback: initNavbar },
    { id: 'footer', url: '/victor-doblaje/components/footer.html' },
    { id: 'hero', url: '/victor-doblaje/sections/landing/hero.html' },
    { id: 'services', url: '/victor-doblaje/sections/landing/services.html' },
    { id: 'demos', url: '/victor-doblaje/sections/landing/demos.html', callback: initDemos },
    { id: 'contact', url: '/victor-doblaje/sections/landing/contact.html' },
  ].forEach(c => loadComponent(c.id, c.url, c.callback));

});
