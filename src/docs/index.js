import { render } from 'react-dom';
import { Navation, Code } from './components';
import Demo from './demo';
import Facebook from '../lib/index';

import './styles.less';

const homepage = 'https://github.com/jameshsu1125/lesca-facebook-share';
const name = 'lesca-facebook-share';
const description = 'simple facebook share';
const code = `import Facebook from 'lesca-facebook-share'; 

Facebook.install('facebook-app-id'); // => https://developers.facebook.com/apps/
`;

const code2 = `import Facebook from 'lesca-facebook-share

const share = () => {
	Facebook.share({
		url: 'https://github.com/jameshsu1125/lesca-facebook-share',
		quote: 'use share facebook api simply',
		hashtag: 'lesca_facebook_share',
	});
};
return <button onClick={share}>Facebook Share</button>
`;

Facebook.install('171368189560011');

const Page = () => {
	return (
		<>
			<Navation />
			<div className='content'>
				<div>
					<h1>{name}</h1>
					<figcaption>{description}</figcaption>
				</div>
				<div>
					<h2>install</h2>
					<Code code={`npm install ${name} --save`} theme='markup' />
				</div>
				<div>
					<h2>run install on entry file</h2>
					<Code code={code} />
					<h2>share your url with parameters</h2>
					<Code code={code2} theme='javascript' />
					<Demo />
				</div>
				<div>
					<h2>Usage</h2>
					<a href={homepage}>Documentation</a>
				</div>
			</div>
		</>
	);
};

render(<Page />, document.getElementById('app'));
