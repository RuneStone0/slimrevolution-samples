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

  /* mobile menu (2nd pass): the checkbox shows the panel but never hides it again —
     tapping "Services" left the menu covering the content it had just scrolled to.
     Close it on link tap, on Escape, or on a tap outside. */
  var toggle = document.getElementById('navToggle');
  var navLabel = document.querySelector('.nav-toggle-label');
  var navEl = document.getElementById('siteNav');
  if (toggle && navLabel) {
    var syncMenu = function () { navLabel.setAttribute('aria-expanded', toggle.checked ? 'true' : 'false'); };
    var closeMenu = function () { if (toggle.checked) { toggle.checked = false; syncMenu(); } };
    navLabel.setAttribute('role', 'button');
    navLabel.setAttribute('aria-expanded', 'false');
    if (navEl) { navLabel.setAttribute('aria-controls', 'siteNav'); }
    toggle.addEventListener('change', syncMenu);
    if (navEl) {
      navEl.addEventListener('click', function (e) { if (e.target.closest('a')) { closeMenu(); } });
    }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); } });
    document.addEventListener('click', function (e) {
      if (!toggle.checked) { return; }
      // the <label> forwards its click to #navToggle, so that synthetic click also
      // reaches this listener — without the toggle check it closed the menu the
      // instant it opened.
      if (e.target === toggle || navLabel.contains(e.target) || (navEl && navEl.contains(e.target))) { return; }
      closeMenu();
    });
  }

  /* mobile menu (2nd pass): the checkbox shows the panel but never hides it again —
     tapping "Services" left the menu covering the content it had just scrolled to.
     Close it on link tap, on Escape, or on a tap outside. */
  var toggle = document.getElementById('navToggle');
  var navLabel = document.querySelector('.nav-toggle-label');
  var navEl = document.getElementById('siteNav');
  if (toggle && navLabel) {
    var syncMenu = function () { navLabel.setAttribute('aria-expanded', toggle.checked ? 'true' : 'false'); };
    var closeMenu = function () { if (toggle.checked) { toggle.checked = false; syncMenu(); } };
    navLabel.setAttribute('role', 'button');
    navLabel.setAttribute('aria-expanded', 'false');
    if (navEl) { navLabel.setAttribute('aria-controls', 'siteNav'); }
    toggle.addEventListener('change', syncMenu);
    if (navEl) {
      navEl.addEventListener('click', function (e) { if (e.target.closest('a')) { closeMenu(); } });
    }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); } });
    document.addEventListener('click', function (e) {
      if (!toggle.checked) { return; }
      // the <label> forwards its click to #navToggle, so that synthetic click also
      // reaches this listener — without the toggle check it closed the menu the
      // instant it opened.
      if (e.target === toggle || navLabel.contains(e.target) || (navEl && navEl.contains(e.target))) { return; }
      closeMenu();
    });
  }

  var yr = document.querySelectorAll('[data-year]');
  for (var i = 0; i < yr.length; i++) { yr[i].textContent = '2026'; }
})();
