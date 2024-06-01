import React from 'react';

function Menu({ userData, setPlay, setOptions }) {
	return (
		<div class="DuoMenu">
			{userData?.lives > 0 ?
			<div class="Button" onClick={setPlay}>Play</div>
			: <div class="Button">No lifes</div>}
			<div class="Button" onClick={setOptions}>Options</div>
		</div>
	);
};

export default Menu;
