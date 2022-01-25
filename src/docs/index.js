import React, { useCallback } from 'react';
import { render } from 'react-dom';
import Facebook from '../lib/index';
import './styles.less';

Facebook.install('171368189560011');

function Page() {
	const onClick = useCallback(() => {
		Facebook.share({
			url: 'https://github.com/jameshsu1125/lesca-facebook-share',
			quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			hashtag: 'lesca-facebook-share',
		});
	}, []);

	return (
		<>
			<div>
				<h1>install</h1>
				<p>npm install lesca-facebook-share --save</p>
			</div>
			<div>
				<button onClick={onClick}>share</button>
			</div>
		</>
	);
}

render(<Page />, document.getElementById('app'));
