import MobileDetect from 'mobile-detect';

export const userAgent = () => {
	const ua = navigator.userAgent || navigator.vendor || window.opera;
	return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

export const device = () => {
	const m = new MobileDetect(window.navigator.userAgent);
	if (m.tablet()) return 'mobile';
	else if (m.mobile()) return 'mobile';
	else return 'desktop';
};

export const root = () => {
	const u = window.location.origin + window.location.pathname;
	if (u.indexOf('.') > 0) {
		const p = u.split('/');
		p.pop();
		const [f] = p.splice(0, 2);
		return `${f}//${p.join('/')}/`;
	}
	return u;
};
