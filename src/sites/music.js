import { useState, useEffect } from 'react';
import TopBar from '../modules/topbar.js';
import Back from "../modules/back.js";
import Dbmusic from '../modules/musicdb.js';
import musicDB from "../music/db.js";

function Music() {
	const [current, setCurrent] = useState("Random")
	const albums = Object.keys(musicDB)
	const next = () => {
		const ind = albums.indexOf(current)
		const max = albums.length
		if (ind+1 === max){
			setCurrent(albums[0])
		} else {
			setCurrent(albums[ind+1])
		}
	}
	return (
		<div>
			<TopBar left={Back()} middle="Music" right={
				<div class="BackButton" onClick={next}>Next</div>
			} />
			<div>
				<div class="Mainbox">
					<Dbmusic album={current} />
				</div>
			</div>
		</div>
	)
}
export default Music;
