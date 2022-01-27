[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/) [![npm](https://img.shields.io/badge/npm-Jameshsu1125-red)](https://www.npmjs.com/~jameshsu1125)

# Installation

```sh
npm install lesca-facebook-share --save
```

# Demo

[Live Demo](https://jameshsu1125.github.io/lesca-facebook-share/)

# Usage

```javascript
import Facebook from 'lesca-facebook-share';

// run install in entry file.
Facebook.install('facebook-app-id'); // get one => https://developers.facebook.com/apps/
```

```javascript
import Facebook from 'lesca-facebook-share';

function share() {
	Facebook.share({
		url: 'https://github.com/jameshsu1125/lesca-facebook-share',
		quote: 'use share facebook api simply',
		hashtag: 'lesca_facebook_share',
		redirect_uri: window.location.href,
	});
}

<button onClick={share}>share to facebook</button>;
```

# Methods

| method                                        |   options    |            description             |       default |
| :-------------------------------------------- | :----------: | :--------------------------------: | ------------: |
| .install(uid)                                 |     uid      | install FB.js with facebook app id |               |
| .share({ url, hashtag, quote, redirect_uri }) |     url      |     The URL you want to share      |               |
|                                               |   hashtag    |            with hashtag            |               |
|                                               |    quote     |             with quote             |               |
|                                               | redirect_uri |      mobile device necessary       | location root |
