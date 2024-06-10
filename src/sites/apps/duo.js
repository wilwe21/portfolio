import React, { useState, useEffect } from "react";
import TopBar from '../../modules/topbar.js';
import Menu from '../../modules/duomods/Menu.js';
import Play from '../../modules/duomods/play.js';
import Options from '../../modules/duomods/Options.js';
import lifes from '../../modules/duomods/lifes.js';
import temp from "../../templates.js";
import langs from "../../lang.js";

function Duo() {
	localStorage.removeItem('null')
	const [profile, setProfile] = useState(() => {
		const prof = localStorage.getItem('profile');
		return prof ? prof : "braill";
	});
	useEffect(() => {
		localStorage.setItem('profile', profile);
		let storData = JSON.parse(localStorage.getItem('userData'));
		console.log(storData)
		if (storData !== null) {
			console.log("storData not null")
			console.log(storData[profile])
			if (storData[profile] === undefined) {
				console.log("profile don't exist")
				storData[profile] = temp[profile]
			}
		} else {
			storData = {}
			storData[profile] = temp[profile]
		}
		console.log(JSON.stringify(storData))
		setUserData(storData)
	}, [profile]);
	const [userData, setUserData] = useState(() => {
		let storData = JSON.parse(localStorage.getItem('userData'));
		if (storData !== null) {
			if (storData[profile] === undefined) {
				console.log("profile don't exist")
				storData[profile] = temp[profile]
			}
		} else {
			storData = {}
			storData[profile] = temp[profile]
		}
		return storData 
	});
	const [play, setPlay] = useState(false);
	const [options, setOptions] = useState(false);
	useEffect(() => {
		localStorage.setItem('userData', JSON.stringify(userData));
	}, [userData]);
	return (
		<div>
			{!play && !options &&
			<div>
				<TopBar left={userData[profile].streak?.count || 0} middle={`Welcome to ${userData[profile].logo}`} right={userData[profile].lives || 0} />
				<Menu userData={userData[profile]} setPlay={setPlay} setOptions={setOptions}/>
			</div>}
			{play &&
			<Play userData={userData} setUserData={setUserData} profile={profile} setPlay={setPlay}/>
			}
			{options &&
			<Options userData={userData} profile={profile} setProfile={setProfile} setOptions={setOptions}/>
			}
		</div>
	)
}

export default Duo;
