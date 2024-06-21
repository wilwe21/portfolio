import React, { useState, useEffect, useMemo } from "react";
import { SlFire } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { generate } from "random-words";
import TopBar from "../topbar.js";
import Ctw from "./ctw.js";
import Cnw from "./cnw.js";
import streak from "./streak.js";
import mega from '../../oi/mega.jpg';

function Play({ userData, setUserData, profile, setPlay }) {
	const [les, setLes] = useState(1)
	const [end, setEnd] = useState(false)
	const modes = ["ctw", "cnw"]
	const pik = modes[Math.floor(Math.random() * modes.length)]
	const word = useMemo(() => generate(), [les]) 
	const lang = JSON.parse(localStorage.getItem('langs'))[profile]
	const key = () => `key-${les}`
	useEffect(() => {
		setEnd(les > userData.length);
	}, [les, userData])
	const back = () => {
		streak(userData, setUserData);
		setPlay(false);
	};
	const exit = () => {
		setPlay(false)
	}
	return (
		<div>
			{userData.lives <= 0 ?
			<>
			<TopBar left={<div class={streak(userData, setUserData, true)}>{userData?.streak?.count}<SlFire class="fire" /></div> || <div class="gray">0<SlFire class="fire" /></div>} middle='You Ded Bro' right={<div class="heart">{userData.lives}<SlHeart class="heartIco" /></div> || <div class="heart">0<SlHeart class="heartIco" /></div>}  />
			<div class="ded">
				<strong>No lifes?</strong>
				<img src={mega} />
				<div class="Button" onClick={() => exit()}>Back</div>
			</div>
			</>
			: <>
			{end ? back()
			 : (
				<div>
					<TopBar left={<div class={streak(userData, setUserData, true)}>{userData?.streak?.count}<SlFire class="fire" /></div> || <div class="gray">0<SlFire class="fire" /></div>} middle={`Lesson ${les}/${userData.length}`} right={<div class="heart">{userData.lives}<SlHeart class="heartIco" /></div> || <div class="heart">0<SlHeart class="heartIco" /></div>}  />
					{pik === "cnw" &&
					<Cnw key={key()} userData={userData} setUserData={setUserData} lang={lang} word={word} les={les} setLes={setLes} exit={exit}/>
					}
					{pik === "ctw" &&
					<Ctw key={key()} userData={userData} setUserData={setUserData} lang={lang} word={word} les={les} setLes={setLes} exit={exit}/>
					}
				</div>
			)}</>}
		</div>
	);
};

export default Play;
