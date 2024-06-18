import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../modules/topbar.js';
import Back from '../modules/back.js';
import langs from '../lang.js';

function Games() {
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
			console.log("adding to list")
			let end = {}
			for (const lang of langsList) {
				console.log({[lang]: local[lang]})
				end[lang] = local[lang] !== undefined ? local[lang] : langs[lang] !== undefined ? langs[lang] : ""
				console.log(end)
			}
			localStorage.setItem('langs', JSON.stringify(end))
		}
	}, [langsList])
	return (
		<div>
			<TopBar left={Back()} middle="Apps" right="" />
			<div class="MainBox"> 
				<Link to="/apps/duo" class="Button">Duo</Link>
				<Link to="/apps/translator" class="Button">Translator</Link>
				<Link to="/apps/mods" class="Button">Mods</Link>
				<Link to="/apps/track" class="Button">Tracker</Link>
			</div>
		</div>
	);
}

export default Games;
