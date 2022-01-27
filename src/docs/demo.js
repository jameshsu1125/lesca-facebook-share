import { useCallback } from 'react';
import Facebook from '../lib/index';

const Demo = () => {
	const share = useCallback(() => {
		const parameters = {
			url: 'https://github.com/jameshsu1125/lesca-facebook-share',
			quote: 'use share facebook api simply',
			hashtag: 'lesca_facebook_share',
		};
		Facebook.share(parameters);
	}, []);
	return (
		<div className='Demo'>
			<button onClick={share}>Facebook Share</button>
		</div>
	);
};
export default Demo;
