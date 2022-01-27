import React from 'react';
import { render } from 'react-dom';
import Navation from './components';
import Demo from './demo';
import Facebook from '../lib/index';

import 'prismjs/themes/prism.css';
import './styles.less';

const homepage = 'https://github.com/jameshsu1125/lesca-facebook-share';
const name = 'lesca-facebook-share';
const description = 'simple facebook share';
const code = ``;

Facebook.install('171368189560011');

function Page() {
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
					<pre>
						<code>
							{HTMLReactParser(Prism.highlight(`npm install ${name} --save`, Prism.languages.javascript, 'command'))}
						</code>
					</pre>
				</div>
				<div>
					<pre>
						<code></code>
					</pre>
				</div>
				<div>
					<pre>
						<code>{HTMLReactParser(Prism.highlight(code, Prism.languages.javascript, 'javascript'))}</code>
					</pre>
					<Demo />
				</div>
				<div>
					<h2>Usage</h2>
					<a href={homepage}>Documentation</a>
				</div>
			</div>
		</>
	);
}

render(<Page />, document.getElementById('app'));
