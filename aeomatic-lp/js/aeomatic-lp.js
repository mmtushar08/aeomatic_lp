// Reveal on scroll — global
(function () {
  var io = new IntersectionObserver(function (es) {
    for (var i = 0; i < es.length; i++) {
      if (es[i].isIntersecting) {
        es[i].target.classList.add('in');
        io.unobserve(es[i].target);
      }
    }
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
})();
