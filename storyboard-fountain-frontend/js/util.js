;(function() {

  window.log = function() {
    if (!/debug=1/.test(window.location.href)) return;
    console.log.apply(console, arguments);
  }

}).call(this);