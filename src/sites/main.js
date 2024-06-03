import React from 'react';
import TopBar from '../modules/topbar.js'
import { Link } from 'react-router-dom';

function Main() {
	return (
		<div>
			<TopBar left="✨" middle="Welcome" right="✨"/>
			<div class="MainBox">
				<Link to="/duo" class="Button">Duo</Link>
				<a href="https://wilwe.itch.io/" target="_blank" class="Button">Itch.io</a>
				<a href="https://github.com/wilwe21" target="_blank" class="Button">GitHub</a>
				<Link to="/about" class="Button">About Me</Link>
			</div>
		</div>
	);
}

export default Main;
