import React from 'react';
import { render } from 'react-dom';
import Facebook from './../lib/index';

import './styles.css';

console.log(Facebook);
Facebook.install('2452563928384846', {
	onload: () => {
		console.log(FB);
	},
});

function clicked() {
	Facebook.share({
		url: 'https://google.com',
		quote: 'asdad',
		hashtag: 'google',
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
