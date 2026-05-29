document.querySelectorAll('.dev-tabs').forEach(function (tabs) {
  tabs.querySelectorAll('.dev-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var win = tab.closest('.dev-window');
      win.querySelectorAll('.dev-tab').forEach(function (t) { t.classList.remove('on'); });
      tab.classList.add('on');
      var idx = tab.dataset.index;
      win.querySelectorAll('.dev-panel').forEach(function (p) { p.style.display = 'none'; });
      var panel = win.querySelector('.dev-panel[data-index="' + idx + '"]');
      if (panel) panel.style.display = 'block';
    });
  });
});
