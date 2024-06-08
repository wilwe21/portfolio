import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../modules/topbar';
import langs from '../lang.js';

function Games() {
	const [langsList, setLangList] = useState(() => {
		const lang = localStorage.getItem('langsList')
		return lang ? JSON.parse(lang) : Object.keys(langs)
	});
	useEffect(() => {
		localStorage.setItem('langsList', JSON.stringify(langsList))
		const local = localStorage.getItem('langs')
		if (local !== null) {
			console.log("not null")
		} else {
			console.log('null')
			let end = {}
			for (const lang of langsList) {
				console.log(end)
				end[lang] += local[lang] !== null ? local[lang] : langs[lang] !== null ? langs[lang] : ""
			}
		}
	}, [langsList])
	return (
		<div>
			<TopBar left="" middle="Apps" right="" />
			<div class="MainBox"> 
				<Link to="/apps/duo" class="Button">Duo</Link>
				<Link to="/apps/translator" class="Button">Translator</Link>
				<Link to="/apps/mods" class="Button">Mods</Link>
				<Link to="/" class="Button">Back</Link>
			</div>
		</div>
	);
}

export default Games;
