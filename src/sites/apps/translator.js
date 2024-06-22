import React, { useState, useEffect } from 'react';
import TopBar from '../../modules/topbar.js';
import Back from "../../modules/back.js";
import ShowKeys from '../../modules/duomods/keyboard.js';
import langs from '../../lang.js';

function Translator() {
	//Init langList if not inited
	const [langsListint, setLangListint] = useState(() => {
		const lang = localStorage.getItem('langsList')
		return lang ? JSON.parse(lang) : Object.keys(langs)
	});
	useEffect(() => {
		localStorage.setItem('langsList', JSON.stringify(langsListint))
		const local = JSON.parse(localStorage.getItem('langs'))
		if (local === null) {
			console.log("saving default list")
			localStorage.setItem('langs', JSON.stringify({'braill': langs.braill, 'illuminati': langs.illuminati, 'enchant': langs.enchant}))
		} else {
			let end = {}
			for (const lang of langsListint) {
				end[lang] = local[lang] !== undefined ? local[lang] : langs[lang] !== undefined ? langs[lang] : ""
			}
			localStorage.setItem('langs', JSON.stringify(end))
		}
	}, [langsListint])
	// ↑ init lang list if not inited
	const [lang, setLang] = useState("")
	const lango = JSON.parse(localStorage.getItem('langsList'))
	const langsList = lango ? lango : Array.from(Object.keys(langs))
	var objs = JSON.parse(localStorage.getItem('langs')) ? JSON.parse(localStorage.getItem('langs')) : ['braill','ulluminati','echnat']
	const langObj = objs[lang] ? objs[lang] : langs[lang] ? langs[lang] : {a: "Empty array"};
	const cHandle = num => {
		const index = langsList.indexOf(lang)
		const len = langsList.length
		let ei = index+num
		if ( ei >= len ) {
			let ei = 0
			setLang(langsList[ei])
			return
		} else if (ei < 0) {
			let ei = len-1
			setLang(langsList[ei])
			return
		}
		setLang(langsList[ei])
	}
	return (
		<div>
			<TopBar left={Back("/apps")} middle={lang} />
			<div class="MainBox">
				<ShowKeys lang={langObj} />
			</div>
			<div class="MainBox">
				<div class="Button" onClick={() => cHandle(-1)}>Prev</div>
				<div class="Button" onClick={() => cHandle(1)}>Next</div>
			</div>
		</div>
	);
}

export default Translator;
