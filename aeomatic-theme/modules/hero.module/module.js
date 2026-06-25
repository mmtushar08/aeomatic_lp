/* Hero Module — animated checklist */
(function () {
  'use strict';
  var checklist = document.getElementById('hero-checklist');
  if (!checklist) return;
  var items = checklist.querySelectorAll('.ci');
  if (!items.length) return;
  var active = 0;

  function tick() {
    items.forEach(function (el, i) {
      el.classList.remove('ci--active', 'ci--done');
      if (i < active) el.classList.add('ci--done');
      else if (i === active) el.classList.add('ci--active');
    });
    active = (active + 1) % (items.length + 1);
    setTimeout(tick, active === 0 ? 1400 : 1300);
  }
  tick();
})();
