"use strict";

module.exports = {
  install: function install(uid, _ref) {
    var _ref$v = _ref.v,
        v = _ref$v === void 0 ? 'v8.0' : _ref$v,
        onload = _ref.onload;
    window.facebook_app_id = uid;

    window.fbAsyncInit = function () {
      FB.init({
        appId: uid,
        cookie: true,
        xfbml: true,
        version: v
      });
      if (onload) onload();
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
  },
  share: function share(_ref2) {
    var redirect_uri = _ref2.redirect_uri,
        url = _ref2.url,
        hashtag = _ref2.hashtag,
        quote = _ref2.quote;
    var id = window.facebook_app_id || false;

    if (!id) {
      console.log('need to call install in constructor');
      return;
    }

    if (this.is()) {
      var p = {
        method: 'share',
        href: url
      };
      if (hashtag) p.hashtag = '#' + hashtag;
      if (quote) p.quote = quote;
      FB.ui(p, function (response) {
        if (redirect_uri) window.location.replace(redirect_uri);
      });
    } else {
      var u = "https://www.facebook.com/dialog/share?app_id=".concat(id, "&href=").concat(encodeURIComponent(url));
      if (redirect_uri) u += "&redirect_uri=".concat(encodeURIComponent(redirect_uri));
      if (hashtag) u += "&hashtag=%23".concat(encodeURIComponent(hashtag));
      if (quote) u += "&quote=".concat(encodeURIComponent(quote));
      if (redirect_uri) window.location.href = u;else {
        if (this.get() === 'desktop') window.open(u);else window.location.href = u += "&redirect_uri=".concat(encodeURIComponent(this.root()));
      }
    }
  },
  get: function get() {
    var MobileDetect = require('mobile-detect'),
        m = new MobileDetect(window.navigator.userAgent);

    if (m.tablet()) return 'mobile';else if (m.mobile()) return 'mobile';else return 'desktop';
  },
  is: function is() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
  },
  root: function root() {
    var u = window.location.origin + window.location.pathname;

    if (u.indexOf('.') > 0) {
      var p = u.split('/');
      p.pop();
      var op = p[0] + '//';

      for (var i = 2; i < p.length; i++) {
        op += p[i] + '/';
      }

      return op;
    }

    return u;
  }
};