(function script() {
  var mainTextColor = '#222222';
  var mainYellow = '#ffbb55';

  document.addEventListener('DOMContentLoaded', function() {
    var bodyEl = document.querySelector('body');
    bodyEl.style.color = mainTextColor;

    var headerEl = document.querySelector('header');
    headerEl.style.background = mainYellow;
    headerEl.style.width = '75%';
    headerEl.style.float = 'right';

    var menuLinks = Array.prototype.slice.apply(
      document.querySelectorAll('.menu li a')
    );
    menuLinks.forEach(function (link) {
      link.style.color = mainTextColor;
    });

    var titleEl = document.querySelector('.titulo');
    titleEl.style.width = '75%';
    titleEl.style.float = 'right';
    titleEl.style.position = 'relative';
    titleEl.style.left = '-7rem';
  });
})();
