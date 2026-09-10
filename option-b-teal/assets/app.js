/* Slim Revolution sample pages — tiny progressive-enhancement script.
   Everything renders without JS; this only adds the mobile sticky-bar
   fade-in and current year. Safe to drop entirely. */
(function () {
  var bar = document.getElementById('stickyBook');
  if (bar) {
    var onScroll = function () {
      var y = window.scrollY || window.pageYOffset;
      if (y > 340) { bar.classList.add('visible'); }
      else { bar.classList.remove('visible'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var yr = document.querySelectorAll('[data-year]');
  for (var i = 0; i < yr.length; i++) { yr[i].textContent = '2026'; }
})();
