"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./constants'),
    userAgent = _require.userAgent,
    device = _require.device,
    root = _require.root;

var defaultOption = {
  v: 'v8.0',
  onload: function onload() {}
};
var property = {};

var install = function install(uid, options) {
  var opt = _objectSpread(_objectSpread({}, defaultOption), options);

  var onload = opt.onload,
      v = opt.v;
  property.id = uid;

  window.fbAsyncInit = function () {
    FB.init({
      appId: uid,
      cookie: true,
      xfbml: true,
      version: v
    });
    onload === null || onload === void 0 ? void 0 : onload();
  };

  (function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

var share = function share(_ref) {
  var redirect_uri = _ref.redirect_uri,
      url = _ref.url,
      hashtag = _ref.hashtag,
      quote = _ref.quote;
  var id = property.id;

  if (!id) {
    console.log('need to install');
    return;
  }

  if (userAgent()) {
    var p = {
      method: 'share',
      href: url
    };
    if (hashtag) p.hashtag = '#' + hashtag;
    if (quote) p.quote = quote;
    FB.ui(p, function () {
      if (redirect_uri) window.location.replace(redirect_uri);
    });
  } else {
    var u = ["https://www.facebook.com/dialog/share?app_id=".concat(id, "&href=").concat(encodeURIComponent(url))];
    if (redirect_uri) u.push("&redirect_uri=".concat(encodeURIComponent(redirect_uri)));
    if (hashtag) u.push("&hashtag=%23".concat(encodeURIComponent(hashtag)));
    if (quote) u.push("&quote=".concat(encodeURIComponent(quote)));
    if (redirect_uri) window.location.href = u.join('');else {
      if (device() === 'desktop') window.open(u);else window.location.href = u.join('') + "&redirect_uri=".concat(encodeURIComponent(root()));
    }
  }
};

var Facebook = {
  install: install,
  share: share
};
var _default = Facebook;
exports["default"] = _default;