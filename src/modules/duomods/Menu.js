import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ userData, setPlay, setOptions }) {
	return (
		<div class="DuoMenu">
			{userData?.lives > 0 ?
			<div class="Button" onClick={setPlay}>Play</div>
			: <div class="Button">No lifes</div>}
			<div class="Button" onClick={setOptions}>Options</div>
			<Link to="/" class="Button">Back</Link>
		</div>
	);
};

export default Menu;
