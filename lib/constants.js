"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAgent = exports.root = exports.device = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _mobileDetect = _interopRequireDefault(require("mobile-detect"));

var userAgent = function userAgent() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

exports.userAgent = userAgent;

var device = function device() {
  var m = new _mobileDetect["default"](window.navigator.userAgent);
  if (m.tablet()) return 'mobile';else if (m.mobile()) return 'mobile';else return 'desktop';
};

exports.device = device;

var root = function root() {
  var u = window.location.origin + window.location.pathname;

  if (u.indexOf('.') > 0) {
    var p = u.split('/');
    p.pop();

    var _p$splice = p.splice(0, 2),
        _p$splice2 = (0, _slicedToArray2["default"])(_p$splice, 1),
        f = _p$splice2[0];

    return "".concat(f, "//").concat(p.join('/'), "/");
  }

  return u;
};

exports.root = root;