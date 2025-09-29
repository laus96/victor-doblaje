$(document).ready(function () {

  const components = [
    { id: 'navbar', url: '../components/navbar.html', callback: initNavbar },
  ];

  components.forEach(c => {
    loadComponent(c.id, c.url).then(() => {
      lucide.createIcons();
      if (typeof c.callback === 'function') {
        c.callback();
      }
    });
  });
  lucide.createIcons();
});