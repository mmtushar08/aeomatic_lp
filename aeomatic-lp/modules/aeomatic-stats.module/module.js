function aeoAnimateStat(el) {
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
var aeoStatIO = new IntersectionObserver(function (es) {
  for (var i = 0; i < es.length; i++) {
    if (es[i].isIntersecting) {
      es[i].target.querySelectorAll('.n[data-target]').forEach(aeoAnimateStat);
      aeoStatIO.unobserve(es[i].target);
    }
  }
}, { threshold: 0.3 });
document.querySelectorAll('.stats-row').forEach(function (el) { aeoStatIO.observe(el); });
