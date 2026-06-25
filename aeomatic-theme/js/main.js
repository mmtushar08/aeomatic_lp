/* AEOmatic Theme — main.js
   Global: scroll reveal, stat counters.
   Module-specific JS lives in each module's module.js.
*/
(function () {
  'use strict';

  /* ─── SCROLL REVEAL ─── */
  function initReveal() {
    var els = document.querySelectorAll('.rv');
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ─── STAT COUNTER ANIMATION ─── */
  function animateStat(el) {
    var target = parseFloat(el.dataset.target);
    var suffix = el.dataset.suffix || '';
    var dur = 1400;
    var start = performance.now();
    var isFloat = target % 1 !== 0;
    function step(t) {
      var p = Math.min(1, (t - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = target * eased;
      el.textContent = (isFloat ? v.toFixed(1) : Math.round(v)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initStatCounters() {
    var rows = document.querySelectorAll('.stats-row');
    if (!rows.length) return;
    var statIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-target]').forEach(animateStat);
          statIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    rows.forEach(function (el) { statIO.observe(el); });
  }

  /* ─── INIT ─── */
  function init() {
    initReveal();
    initStatCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
