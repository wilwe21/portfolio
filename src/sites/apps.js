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
			let end = {}
			for (const lang of langsList) {
				end[lang] = local[lang] !== undefined ? local[lang] : langs[lang] !== undefined ? langs[lang] : ""
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
				<Link to="/apps/bell" class="Button">Bell</Link>
				<Link to="/apps/dni" class="Button">Dni</Link>
			</div>
		</div>
	);
}

export default Games;
