'use strict'
//import {DetectScroll} from './arrowScroll';

;
var _qs = function _qs(p) {
  return !!document.querySelector(p) ? document.querySelector(p) : 0;
};

var topHeight = parseInt(_qs("header").offsetHeight + _qs(".breadcrumb").offsetHeight + _qs(".wrapperBanner").offsetHeight);
var bottomHeight = parseInt(_qs('.footer').offsetTop - _qs('.footer').offsetHeight * 2);

var s = new DetectScroll(topHeight, bottomHeight).__Init__();
//# sourceMappingURL=app.main.js.map
