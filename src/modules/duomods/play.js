import React, { useState, useEffect, useMemo } from "react";
import { generate } from "random-words";
import TopBar from "../topbar.js";
import Ctw from "./ctw.js";
import streak from "./streak.js";

function Play({ userData, setUserData, profile, setPlay }) {
	const [les, setLes] = useState(1);
	const [end, setEnd] = useState(false);
	const word = useMemo(() => generate(), [les]); 
	const lang = JSON.parse(localStorage.getItem('langs'))[profile]
	const CtwKey = () => `ctw-${les}`;
	useEffect(() => {
		setEnd(les > userData.length);
	}, [les, userData])
	const back = () => {
		streak(userData, setUserData);
		setPlay(false);
	};
	return (
		<div>
			{end ? (
				<div> {back()} </div>
			) : (
				<div>
					<TopBar left={userData?.streak?.count || 0} middle={`Lesson ${les}/${userData.length}`} right={userData?.lives || 0} />
					<Ctw key={CtwKey()} userData={userData} setUserData={setUserData} lang={lang} word={word} les={les} setLes={setLes}/>
				</div>
			)}
		</div>
	);
};

export default Play;
