// Duplicate review tracks for seamless infinite scroll
(function () {
  ['aeo-rev-track1', 'aeo-rev-track2'].forEach(function (id) {
    var track = document.getElementById(id);
    if (track) { track.innerHTML += track.innerHTML; }
  });
})();
