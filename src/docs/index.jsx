import React from 'react';
import { render } from 'react-dom';
import Facebook from './../lib/index';

import './styles.css';

Facebook.install('171368189560011');

function clicked() {
	Facebook.share({
		url: 'https://lesca.net',
		quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		hashtag: 'Lesca',
	});
}
function Demo() {
	return (
		<>
			<button onClick={clicked}>share</button>
		</>
	);
}

render(<Demo />, document.getElementById('app'));
