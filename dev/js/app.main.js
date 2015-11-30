'use strict';
//import {DetectScroll} from './arrowScroll';

let _qs = (p)=> !!document.querySelector(p) ? document.querySelector(p) : 0;

let topHeight = parseInt(_qs("header").offsetHeight + _qs(".breadcrumb").offsetHeight + _qs(".wrapperBanner").offsetHeight);
let bottomHeight = parseInt(_qs('.footer').offsetTop - _qs('.footer').offsetHeight * 2);

let s = new DetectScroll(topHeight, bottomHeight).__Init__();
