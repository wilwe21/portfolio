import React from "react";
import TopBar from '../topbar.js';

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
			<TopBar left={userData?.streak?.count || 0} middle={`Welcome to ${userData?.logo}`} right={userData?.lives || 0} />
			<div class="DuoMenu">
				<div class="Button" onClick={handleClick}>{profile}</div>
				<div class="Button" onClick={reset}>Reset all data</div>
				<div class="Button" onClick={() => setOptions(false)}>Back</div>
			</div>
		</div>
	);
}

export default Options;
