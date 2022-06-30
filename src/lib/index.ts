import { device, root, userAgent } from './mise';

declare global {
  interface Window {
    fbAsyncInit: Function;
    FB: any;
  }
  interface HTMLElement {
    src: string;
  }
}

type Options = {
  id: string;
};

type ShareOptions = {
  method: string;
  href: string;
  redirect_uri?: string;
  hashtag?: string;
  quote?: string;
};

const defaultOption = { v: 'v8.0', onload: () => {} };
const property = { id: '' };

const install = (uid: string, options: Options) => {
  const opt = { ...defaultOption, ...options };
  const { onload, v } = opt;
  property.id = uid;

  window.fbAsyncInit = function () {
    window.FB.init({
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
    fjs.parentNode?.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

const defaultShareOptions: ShareOptions = {
  method: 'share',
  href: '',
};

const share = (shareOptions: ShareOptions = defaultShareOptions) => {
  const { href, redirect_uri, hashtag, quote } = shareOptions;
  const { id } = property;
  if (!id) {
    console.log('need to install');
    return;
  }

  if (userAgent()) {
    const p: ShareOptions = {
      method: 'share',
      href,
    };

    if (hashtag) p.hashtag = '#' + hashtag;
    if (quote) p.quote = quote;

    window.FB.ui(p, () => {
      if (redirect_uri) window.location.replace(redirect_uri);
    });
  } else {
    const u = [
      `https://www.facebook.com/dialog/share?app_id=${id}&href=${encodeURIComponent(href)}`,
    ];

    if (redirect_uri) u.push(`&redirect_uri=${encodeURIComponent(redirect_uri)}`);
    if (hashtag) u.push(`&hashtag=%23${encodeURIComponent(hashtag)}`);
    if (quote) u.push(`&quote=${encodeURIComponent(quote)}`);

    if (redirect_uri) window.location.href = u.join('');
    else {
      if (device() === 'desktop') window.open(u[0]);
      else window.location.href = u.join('') + `&redirect_uri=${encodeURIComponent(root())}`;
    }
  }
};

const Facebook = { install, share };
export default Facebook;
