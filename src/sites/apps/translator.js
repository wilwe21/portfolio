import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../../modules/topbar.js';
import ShowKeys from '../../modules/duomods/keyboard.js';
import Templates from '../../templates.js';

function Translator() {
	const [lang, setLang] = useState("braill")
	const langs = Array.from(Object.keys(Templates.templates))
	console.log(langs)
	const langObj = Templates.templates[lang].lern;
	const cHandle = num => {
		const index = langs.indexOf(lang)
		const len = langs.length
		let ei = index+num
		if ( ei >= len ) {
			let ei = 0
			setLang(langs[ei])
			return
		} else if (ei < 0) {
			let ei = len-1
			setLang(langs[ei])
			return
		}
		setLang(langs[ei])
	}
	return (
		<div>
			<TopBar middle={lang} />
			<div class="MainBox">
				<ShowKeys lang={langObj} />
			</div>
			<div class="MainBox">
				<div class="Button" onClick={() => cHandle(-1)}>Prev</div>
				<Link to="/apps" class="Button">Back</Link>
				<div class="Button" onClick={() => cHandle(1)}>Next</div>
			</div>
		</div>
	);
}

export default Translator;
