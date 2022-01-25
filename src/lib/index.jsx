const { userAgent, device, root } = require('./constants');

const defaultOption = { v: 'v8.0', onload: () => {} };
const property = {};

const install = (uid, options) => {
	const opt = { ...defaultOption, ...options };
	const { onload, v } = opt;
	property.id = uid;
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
};

const share = ({ redirect_uri, url, hashtag, quote }) => {
	const { id } = property;
	if (!id) {
		console.log('need to install');
		return;
	}
	if (userAgent()) {
		const p = {
			method: 'share',
			href: url,
		};
		if (hashtag) p.hashtag = '#' + hashtag;
		if (quote) p.quote = quote;

		FB.ui(p, () => {
			if (redirect_uri) window.location.replace(redirect_uri);
		});
	} else {
		const u = [`https://www.facebook.com/dialog/share?app_id=${id}&href=${encodeURIComponent(url)}`];

		if (redirect_uri) u.push(`&redirect_uri=${encodeURIComponent(redirect_uri)}`);
		if (hashtag) u.push(`&hashtag=%23${encodeURIComponent(hashtag)}`);
		if (quote) u.push(`&quote=${encodeURIComponent(quote)}`);

		if (redirect_uri) window.location.href = u.join('');
		else {
			if (device() === 'desktop') window.open(u);
			else window.location.href = u.join('') + `&redirect_uri=${encodeURIComponent(root())}`;
		}
	}
};

const Facebook = { install, share };
export default Facebook;
