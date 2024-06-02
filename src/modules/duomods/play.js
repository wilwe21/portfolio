import React, { useState, useEffect, useMemo } from "react";
import { generate } from "random-words";
import TopBar from "./TopBar.js";
import Ctw from "./ctw.js";
import streak from "./streak.js";

function Play({ userData, setUserData, setPlay }) {
	const [les, setLes] = useState(1);
	const [end, setEnd] = useState(false);
	const word = useMemo(() => generate(), [les]); 
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
					<TopBar userData={userData} title={"Lesson "+les+"/"+userData.length}/>
					<Ctw key={CtwKey()} userData={userData} setUserData={setUserData} word={word} les={les} setLes={setLes}/>
				</div>
			)}
		</div>
	);
};

export default Play;
