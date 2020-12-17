[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-facebook-share --save
```

# Usage

```javascript
import Facebook from 'lesca-facebook-share';

Facebook.install('facebook-app-id', {
	onload: () => {
		console.log(FB);
	},
});

function share() {
	Facebook.share({
		url: 'https://lesca.net',
		quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		hashtag: 'Lesca',
	});
}

<button onClick={share}>share to facebook</button>;
```

# Methods

| method                                       |   options    |         description          |       default |
| :------------------------------------------- | :----------: | :--------------------------: | ------------: |
| install(uid, {v, onload })                   |     uid      |       facebook app id        |               |
|                                              |      v       |  version of facebook sdk.js  |           8.0 |
|                                              |    onload    |       get FB function        |               |
| share({ url, hashtag, quote, redirect_uri }) |     url      |        og:meta source        |               |
|                                              |   hashtag    |           hashtag            |               |
|                                              |    quote     |            quote             |               |
|                                              | redirect_uri |  !! mobile device necessary  | location root |
