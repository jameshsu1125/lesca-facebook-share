"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _mise = require("./mise");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultOption = {
  v: 'v8.0',
  onload: function onload() {}
};
var property = {
  id: ''
};
var install = function install(uid, options) {
  var opt = _objectSpread(_objectSpread({}, defaultOption), options);
  var onload = opt.onload,
    v = opt.v;
  property.id = uid;
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: uid,
      cookie: true,
      xfbml: true,
      version: v
    });
    onload === null || onload === void 0 || onload();
  };
  (function (d, s, id, _fjs$parentNode) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    (_fjs$parentNode = fjs.parentNode) === null || _fjs$parentNode === void 0 || _fjs$parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};
var defaultShareOptions = {
  method: 'share',
  href: ''
};
var share = function share() {
  var shareOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultShareOptions;
  var href = shareOptions.href,
    redirect_uri = shareOptions.redirect_uri,
    hashtag = shareOptions.hashtag,
    quote = shareOptions.quote;
  var id = property.id;
  if (!id) {
    console.log('need to install');
    return;
  }
  if ((0, _mise.userAgent)()) {
    var p = {
      method: 'share',
      href: href
    };
    if (hashtag) p.hashtag = '#' + hashtag;
    if (quote) p.quote = quote;
    window.FB.ui(p, function () {
      if (redirect_uri) window.location.replace(redirect_uri);
    });
  } else {
    var u = ["https://www.facebook.com/dialog/share?app_id=".concat(id, "&href=").concat(encodeURIComponent(href))];
    if (redirect_uri) u.push("&redirect_uri=".concat(encodeURIComponent(redirect_uri)));
    if (hashtag) u.push("&hashtag=%23".concat(encodeURIComponent(hashtag)));
    if (quote) u.push("&quote=".concat(encodeURIComponent(quote)));
    if (redirect_uri) window.location.href = u.join('');else {
      if ((0, _mise.device)() === 'desktop') window.open(u[0]);else window.location.href = u.join('') + "&redirect_uri=".concat(encodeURIComponent((0, _mise.root)()));
    }
  }
};
var Facebook = {
  install: install,
  share: share
};
var _default = exports["default"] = Facebook;