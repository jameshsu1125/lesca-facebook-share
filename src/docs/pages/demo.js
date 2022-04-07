import { Button, ButtonGroup } from '@mui/material';
import { useCallback } from 'react';
import Facebook from '../../lib/';

Facebook.install('171368189560011');

const Demo = () => {
  const share = useCallback(() => {
    const parameters = {
      url: 'https://www.npmjs.com/package/lesca-facebook-share',
      quote: 'use share facebook api simply',
      hashtag: 'this_is_hashtag',
    };
    Facebook.share(parameters);
  }, []);

  return (
    <div className='Demo'>
      <h3>share this now</h3>
      <ButtonGroup variant='contained'>
        <Button onClick={share}>Facebook Share</Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
