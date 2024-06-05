import React from 'react';
import TopBar from '../modules/topbar.js'
import { Link } from 'react-router-dom';

function Main() {
	return (
		<div>
			<TopBar left="✨" middle="Welcome" right="✨"/>
			<div class="MainBox">
				<Link to="/games" class="Button">Games</Link>
				<Link to="/3d" class="Button">3D</Link>
				<a href="https://wilwe.itch.io/" target="_blank" class="Button">Itch.io</a>
				<a href="https://github.com/wilwe21" target="_blank" class="Button">GitHub</a>
				<Link to="/about" class="Button">About Me</Link>
				<Link to="/things" class="Button">Random</Link>
				<a href="https://youtu.be/8nF8PvNmuCc?si=PMgTC3_EtqBte6h5" title="My favorite color is 12" target="_blank" class="Button">I'm really excited about burger</a>
			</div>
		</div>
	);
}

export default Main;
