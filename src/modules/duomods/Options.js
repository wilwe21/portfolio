import React from "react";
import TopBar from './TopBar.js';

function Options({ userData, profile, setProfile, setOptions }) {
	const handleClick = () => {
		if (profile === 'braill') {
			setProfile('illuminati')
		} else if (profile === 'illuminati') {
			setProfile('enchant')
		} else {
			setProfile('braill')
		}
	}
	const reset = () => {
		localStorage.removeItem('braill')
		localStorage.removeItem('enchant')
		localStorage.removeItem('illuminati')
	}
	return (
		<div>
			<TopBar userData={userData} title="Options"/>
			<div class="DuoMenu">
				<div class="Button" onClick={handleClick}>{profile}</div>
				<div class="Button" onClick={reset}>Reset all data</div>
				<div class="Button" onClick={() => setOptions(false)}>Back</div>
			</div>
		</div>
	);
}

export default Options;
