// Duplicate marquee for seamless infinite scroll
(function () {
  var track = document.getElementById('aeo-mtrack');
  if (track) { track.innerHTML += track.innerHTML; }
})();

// Hero checklist cycle
(function () {
  var items = document.querySelectorAll('#aeo-checklist .ci');
  if (!items.length) return;
  var active = 0;
  function tick() {
    items.forEach(function (el, i) {
      el.classList.remove('active', 'done');
      if (i < active) el.classList.add('done');
      else if (i === active) el.classList.add('active');
    });
    active = (active + 1) % (items.length + 1);
    setTimeout(tick, active === 0 ? 1400 : 1300);
  }
  tick();
})();
