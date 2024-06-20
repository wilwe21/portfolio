import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ userData, setPlay, setOptions }) {
	return (
		<div class="DuoMenu">
			<div class="Button" onClick={setPlay}>Play</div>
			<div class="Button" onClick={setOptions}>Options</div>
			<Link to="/apps" class="Button">Back</Link>
		</div>
	);
};

export default Menu;
