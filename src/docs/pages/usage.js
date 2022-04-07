import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Code from '../components/code';

const codes = [
  {
    title: '1. Installation',
    code: `npm install lesca-facebook-share --save`,
    type: 'text',
  },
  {
    title: '2. install before DOM Render',
    code: `import Facebook from 'lesca-facebook-share';

Facebook.install('facebook-app-id'); // get your id => https://developers.facebook.com/apps/`,
    type: 'js',
  },
  {
    title: '3. run share with parameters',
    code: `Facebook.share({
  url: 'https://github.com/jameshsu1125/lesca-facebook-share',
  quote: 'use share facebook api simply',
  hashtag: 'lesca_facebook_share',
  redirect_uri: window.location.href,
});`,
  },
];

const Usage = () => {
  useEffect(() => {}, []);
  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
      <ButtonGroup variant='contained'>
        <Button>click</Button>
      </ButtonGroup>
    </div>
  );
};
export default Usage;
