(function () {
  var id = 'verdana-bookmarklet-styles';
  var existing = document.getElementById(id);
  // If already applied, toggle off
  if (existing) {
    existing.remove();
    return;
  }
  var style = document.createElement('style');
  style.id = id;
  style.textContent =
    '*{font-family:Verdana,Geneva,sans-serif !important;' +
    'font-size:14px !important;' +
    '-webkit-font-smoothing:none !important;' +
    '-moz-osx-font-smoothing:unset !important;' +
    'font-smooth:never !important;' +
    'text-rendering:optimizeSpeed !important;}';
  document.head.appendChild(style);
})();
