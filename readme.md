[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

It jsut use for share url to Facebook simply.

#### [Live Demo](https://jameshsu1125.github.io/lesca-facebook-share/)

# Installation

```sh
npm install lesca-facebook-share --save
```

## Usage

install before DOM Render

```javascript
import Facebook from 'lesca-facebook-share';

Facebook.install('facebook-app-id'); // get your id => https://developers.facebook.com/apps/
```

share with parameters

```javascript
Facebook.share({
  url: 'https://github.com/jameshsu1125/lesca-facebook-share',
  quote: 'use share facebook api simply',
  hashtag: 'lesca_facebook_share',
  redirect_uri: window.location.href,
});
```

## Development

### Methods

| method                                                                                               |          description          | return |
| :--------------------------------------------------------------------------------------------------- | :---------------------------: | -----: |
| .install(uid: _string_)                                                                              |      initialize with uid      |   void |
| .share({ **url**: _string_, **hashtag**: _string_, **quote**: _string_, **redirect_url**: _string_}) | [parmaters](#share-parmaters) |        |

#### share parmaters

| parmaters                  |             description             |       default |
| :------------------------- | :---------------------------------: | ------------: |
| **url**: _string_          |              share url              |               |
| **hashtag**: _string_      |               hashtag               |          void |
| **quote**: _string_        |                quote                |          void |
| **redirect_url**: _string_ | redirect url (**mobile necessary**) | location.href |

### Features

- maintain if necessary
