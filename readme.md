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

Facebook.install('facebook-app-id'); // get one => https://developers.facebook.com/apps/
function share() {
	Facebook.share({
		url: 'https://github.com/jameshsu1125/lesca-facebook-share',
		quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		hashtag: 'lesca-facebook-share',
	});
}

<button onClick={share}>share to facebook</button>;
```

# Methods

| method                                       |   options    |        description         |       default |
| :------------------------------------------- | :----------: | :------------------------: | ------------: |
| install(uid)                                 |     uid      |      facebook app id       |               |
| share({ url, hashtag, quote, redirect_uri }) |     url      |       og:meta source       |               |
|                                              |   hashtag    |          hashtag           |               |
|                                              |    quote     |           quote            |               |
|                                              | redirect_uri | !! mobile device necessary | location root |
