import React from "react";
import TopBar from '../topbar.js';
import templates from "../../templates.js";

function Options({ userData, profile, setProfile, setOptions }) {
	const langs = Array.from(Object.keys(templates))
	const handleClick = () => {
		const index = langs.indexOf(profile)
		const len = langs.length
		let ei = index+1
		if ( ei >= len ) {
			setProfile(langs[0])
			return
		} else if (ei < 0) {
			setProfile(langs[len])
			return
		}
		setProfile(langs[ei])
	}
	const reset = () => {
		localStorage.removeItem('braill')
		localStorage.removeItem('enchant')
		localStorage.removeItem('illuminati')
		localStorage.removeItem('windings')
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
