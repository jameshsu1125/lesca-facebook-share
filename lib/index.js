var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "./mise"], function (require, exports, mise_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultOption = { v: 'v8.0', onload: function () { } };
    var property = { id: '' };
    var install = function (uid, options) {
        var opt = __assign(__assign({}, defaultOption), options);
        var onload = opt.onload, v = opt.v;
        property.id = uid;
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: uid,
                cookie: true,
                xfbml: true,
                version: v,
            });
            onload === null || onload === void 0 ? void 0 : onload();
        };
        (function (d, s, id) {
            var _a;
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            (_a = fjs.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    };
    var defaultShareOptions = {
        method: 'share',
        href: '',
    };
    var share = function (shareOptions) {
        if (shareOptions === void 0) { shareOptions = defaultShareOptions; }
        var href = shareOptions.href, redirect_uri = shareOptions.redirect_uri, hashtag = shareOptions.hashtag, quote = shareOptions.quote;
        var id = property.id;
        if (!id) {
            console.log('need to install');
            return;
        }
        if ((0, mise_1.userAgent)()) {
            var p = {
                method: 'share',
                href: href,
            };
            if (hashtag)
                p.hashtag = '#' + hashtag;
            if (quote)
                p.quote = quote;
            window.FB.ui(p, function () {
                if (redirect_uri)
                    window.location.replace(redirect_uri);
            });
        }
        else {
            var u = [
                "https://www.facebook.com/dialog/share?app_id=".concat(id, "&href=").concat(encodeURIComponent(href)),
            ];
            if (redirect_uri)
                u.push("&redirect_uri=".concat(encodeURIComponent(redirect_uri)));
            if (hashtag)
                u.push("&hashtag=%23".concat(encodeURIComponent(hashtag)));
            if (quote)
                u.push("&quote=".concat(encodeURIComponent(quote)));
            if (redirect_uri)
                window.location.href = u.join('');
            else {
                if ((0, mise_1.device)() === 'desktop')
                    window.open(u[0]);
                else
                    window.location.href = u.join('') + "&redirect_uri=".concat(encodeURIComponent((0, mise_1.root)()));
            }
        }
    };
    var Facebook = { install: install, share: share };
    exports.default = Facebook;
});
