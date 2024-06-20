import React from "react";
import { SlFire } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import streak from "./streak.js";
import TopBar from '../topbar.js';
import templates from "../../templates.js";

function Options({ userData, setUserData, profile, setProfile, setOptions }) {
	const langs = JSON.parse(localStorage.getItem('langsList'))
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
		for (const lang of langs) {
			localStorage.removeItem(lang)
		}
	}
	return (
		<div>
				<TopBar left={<div class={streak(userData, setUserData, true, false)}>{userData.streak?.count}<SlFire class="fire" /></div> || <div class="gray">0<SlFire class="fire" /></div>} middle="Options" right={<div class="heart">{userData.lives}<SlHeart class="heartIco" /></div> || <div class="heart">0<SlHeart class="heartIco" /></div>}  />
<div class="DuoMenu">
				<div class="Button" onClick={handleClick}>{profile}</div>
				<div class="Button" onClick={reset}>Reset all data</div>
				<div class="Button" onClick={() => streak(userData, setUserData, false, true)}>Reset current streak</div>
				<div class="Button" onClick={() => setOptions(false)}>Back</div>
			</div>
		</div>
	);
}

export default Options;
