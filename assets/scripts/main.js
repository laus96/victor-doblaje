$(function () {
  [
    { id: 'navbar', url: '/victor-doblaje/components/navbar.html', callback: initNavbar },
    { id: 'footer', url: '/victor-doblaje/components/footer.html', callback: initFooter },
    { id: 'hero', url: '/victor-doblaje/sections/landing/hero.html' },
    { id: 'services', url: '/victor-doblaje/sections/landing/services.html' },
    { id: 'demos', url: '/victor-doblaje/sections/landing/demos.html', callback: initDemos },
    { id: 'contact', url: '/victor-doblaje/sections/landing/contact.html', callback: initContact },
  ].forEach(c => loadComponent(c.id, c.url, c.callback));
});

/*
$(function () {
  [
    { id: 'navbar', url: '/components/navbar.html', callback: initNavbar },
    { id: 'footer', url: '/components/footer.html', callback: initFooter },
    { id: 'hero', url: '/sections/landing/hero.html' },
    { id: 'services', url: '/sections/landing/services.html' },
    { id: 'demos', url: '/sections/landing/demos.html', callback: initDemos },
    { id: 'contact', url: '/sections/landing/contact.html', callback: initContact },
  ].forEach(c => loadComponent(c.id, c.url, c.callback));
});

*/