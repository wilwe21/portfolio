import React from 'react';
import TopBar from './mainmods/topbar.js'
import { Link } from 'react-router-dom';

function Main() {
	return (
		<div>
			<TopBar />
			<Link to="/duo" class="Button">chuj</Link>
		</div>
	);
}

export default Main;
