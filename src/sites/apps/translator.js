import React, { useState } from 'react';
import TopBar from '../../modules/topbar.js';
import ShowKeys from '../../modules/duomods/keyboard.js';
import Templates from '../../templates.js';

function Translator() {
	const [lang, setLang] = useState("illuminati")
	console.log(Templates.templates)
	const langObj = Templates.templates[lang].lern;
	return (
		<div>
			<TopBar middle={lang} />
			<div class="MainBox">
				<ShowKeys lang={langObj} />
				<input placeholder="enter some text" />
			</div>
			<div class="MainBox">
				<div class="Button">Prev</div>
				<div class="Button">Next</div>
			</div>
		</div>
	);
}

export default Translator;
