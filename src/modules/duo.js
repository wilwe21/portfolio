import React, { useState, useEffect } from "react";
import TopBar from './duomods/TopBar.js';
import Menu from './duomods/Menu.js';
import Play from './duomods/play.js';
import Options from './duomods/Options.js';
import lifes from './duomods/lifes.js';
import temp from "./templates.js";

function Duo() {
	localStorage.removeItem('null')
	const { templates } = temp;
	const [profile, setProfile] = useState(() => {
		const prof = localStorage.getItem('profile');
		return prof ? prof : "braill";
	});
	useEffect(() => {
		localStorage.setItem('profile', profile);
		const data = localStorage.getItem(profile);
		setUserData(data ? JSON.parse(data) : templates[profile]);
	}, [profile]);
	const [userData, setUserData] = useState(() => {
		const storData = localStorage.getItem(profile);
		console.log(storData);
		return storData ? JSON.parse(storData) : templates[profile] });
	const [play, setPlay] = useState(false);
	const [options, setOptions] = useState(false);

	useEffect(() => {
		localStorage.setItem(localStorage.getItem('profile'), JSON.stringify(userData));
	}, [userData]);
	return (
		<div>
			{!play && !options &&
			<div>
				<TopBar userData={userData} />
				<Menu userData={userData} setPlay={setPlay} setOptions={setOptions}/>
			</div>}
			{play &&
			<Play userData={userData} setUserData={setUserData} setPlay={setPlay}/>
			}
			{options &&
			<Options userData={userData} profile={profile} setProfile={setProfile} setOptions={setOptions}/>
			}
		</div>
	)
}

export default Duo;
