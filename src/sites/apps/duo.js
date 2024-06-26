import React, { useState, useEffect } from "react";
import { SlFire } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import TopBar from '../../modules/topbar.js';
import Menu from '../../modules/duomods/Menu.js';
import Play from '../../modules/duomods/play.js';
import Options from '../../modules/duomods/Options.js';
import lifes from '../../modules/duomods/lifes.js';
import streak from '../../modules/duomods/streak.js';
import temp from "../../templates.js";
import langs from "../../lang.js";

function Duo() {
	//Init langList if not inited
	const [langsList, setLangList] = useState(() => {
		const lang = localStorage.getItem('langsList')
		return lang ? JSON.parse(lang) : Object.keys(langs)
	});
	useEffect(() => {
		localStorage.setItem('langsList', JSON.stringify(langsList))
		const local = JSON.parse(localStorage.getItem('langs'))
		if (local === null) {
			console.log("saving default list")
			localStorage.setItem('langs', JSON.stringify({'braill': langs.braill, 'illuminati': langs.illuminati, 'enchant': langs.enchant}))
		} else {
			let end = {}
			for (const lang of langsList) {
				end[lang] = local[lang] !== undefined ? local[lang] : langs[lang] !== undefined ? langs[lang] : ""
			}
			localStorage.setItem('langs', JSON.stringify(end))
		}
	}, [langsList])
	// ↑ init lang list if not inited
	localStorage.removeItem('null')
	const [profile, setProfile] = useState(() => {
		const prof = localStorage.getItem('profile');
		return prof ? prof : "braill";
	});
	useEffect(() => {
		localStorage.setItem('profile', profile);
		const data = JSON.parse(localStorage.getItem(profile))
		setUserData(data ? data : temp[profile] ? temp[profile] : temp.braill)
	}, [profile]);
	const [userData, setUserData] = useState(() => {
		let storData = JSON.parse(localStorage.getItem(profile));
		return storData ? storData : temp[profile] ? temp[profile] : temp.braill 
	});
	const [play, setPlay] = useState(false);
	const [options, setOptions] = useState(false);
	useEffect(() => {
		localStorage.setItem(profile, JSON.stringify(userData));
	}, [userData]);
	streak(userData, setUserData, true, false)
	lifes(userData, setUserData)
	return (
		<div>
			{!play && !options &&
			<div>
				<TopBar left={<div class={streak(userData, setUserData, true, false)}>{userData.streak?.count}<SlFire class="fire" /></div> || <div class="gray">0<SlFire class="fire" /></div>} middle={`Welcome to ${userData.logo}`} right={<div class="heart">{userData.lives}<SlHeart class="heartIco" /></div> || <div class="heart">0<SlHeart class="heartIco" /></div>} />
				<Menu userData={userData} setPlay={setPlay} setOptions={setOptions}/>
			</div>}
			{play &&
			<Play userData={userData} setUserData={setUserData} profile={profile} setPlay={setPlay}/>
			}
			{options &&
			<Options userData={userData} setUserData={setUserData} profile={profile} setProfile={setProfile} setOptions={setOptions}/>
			}
		</div>
	)
}

export default Duo;
