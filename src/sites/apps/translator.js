import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../../modules/topbar.js';
import ShowKeys from '../../modules/duomods/keyboard.js';
import langs from '../../lang.js';

function Translator() {
	const [lang, setLang] = useState("braill")
	const lango = JSON.parse(localStorage.getItem('langsList'))
	const langsList = lango ? lango : Array.from(Object.keys(langs))
	const objs = JSON.parse(localStorage.getItem('langs'))
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
			<TopBar left={<Link to="/apps" class="Button">Back</Link>} middle={lang} />
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
