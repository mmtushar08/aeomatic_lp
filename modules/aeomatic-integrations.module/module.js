// Floating bubble drift animation
(function () {
  var bubbles = document.querySelectorAll('.int-bubble');
  bubbles.forEach(function (b, i) {
    var phase = i * 0.7;
    function tick(t) {
      var sx = Math.sin(t / 1500 + phase) * 4;
      var sy = Math.cos(t / 1700 + phase) * 4;
      b.style.transform = 'translate(' + sx + 'px, ' + sy + 'px)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
})();
