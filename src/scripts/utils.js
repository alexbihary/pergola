'use strict';
(function(w, d) {

  var styleList = 'default,primary,success,info,warning,danger,secondary,muted,inverse'.split(',');

  function switchButtons(style) {
    var btns = d.querySelectorAll('.button-component-demo button');
    [].forEach.call(btns, function(b) {
      if (!b.matches('[ui-btn~=box]') && !b.matches('[ui-btn~=circle]') && !b.matches('[ui-btn~=square]')) {
        b.innerHTML = style[0].toUpperCase() + style.substr(1);
      } else {
        b.innerHTML = '&times;';
      }

      var list = b.getAttribute('ui-btn').split(' ');
      styleList.forEach(function(l) {
        if (list.indexOf(l) > -1) {
          list.splice(list.indexOf(l), 1);
        }
      });
      if (styleList.indexOf(style) > -1) {
        list.push(style);
      }
      b.setAttribute('ui-btn', list.join(' '));
    });
  }

  var menu = d.querySelector('#button-style-menu');
  menu.addEventListener('click', function(e) {
    var item = e.target;
    if (item.matches('[ui-btn]')) {
      switchButtons(item.innerHTML.toLowerCase());
    }
  }, false);

})(window, document);
