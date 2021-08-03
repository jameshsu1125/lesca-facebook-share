const defaultOption = { v: 'v8.0', onload: () => {} };
module.exports = {
	install(uid, options = defaultOption) {
		const opt = { ...defaultOption, ...options };
		const { onload, v } = opt;

		window.facebook_app_id = uid;

		window.fbAsyncInit = function () {
			FB.init({
				appId: uid,
				cookie: true,
				xfbml: true,
				version: v,
			});
			onload?.();
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
	share({ redirect_uri, url, hashtag, quote }) {
		let id = window.facebook_app_id || false;

		if (!id) {
			console.log('need to call install in constructor');
			return;
		}

		if (this.is()) {
			let p = {
				method: 'share',
				href: url,
			};
			if (hashtag) p.hashtag = '#' + hashtag;
			if (quote) p.quote = quote;
			FB.ui(p, function (response) {
				if (redirect_uri) window.location.replace(redirect_uri);
			});
		} else {
			let u = `https://www.facebook.com/dialog/share?app_id=${id}&href=${encodeURIComponent(url)}`;
			if (redirect_uri) u += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
			if (hashtag) u += `&hashtag=%23${encodeURIComponent(hashtag)}`;
			if (quote) u += `&quote=${encodeURIComponent(quote)}`;

			if (redirect_uri) window.location.href = u;
			else {
				if (this.get() === 'desktop') window.open(u);
				else window.location.href = u += `&redirect_uri=${encodeURIComponent(this.root())}`;
			}
		}
	},
	get() {
		let MobileDetect = require('mobile-detect'),
			m = new MobileDetect(window.navigator.userAgent);

		if (m.tablet()) return 'mobile';
		else if (m.mobile()) return 'mobile';
		else return 'desktop';
	},
	is() {
		let ua = navigator.userAgent || navigator.vendor || window.opera;
		return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
	},
	root() {
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
	},
};
