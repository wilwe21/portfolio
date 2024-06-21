import React, { useState } from 'react';
import { generate } from 'random-words';
import life from './lifes.js';
import translate from './translate.js';

function Ctw({key, userData, setUserData, lang, word, les, setLes, exit}) {
	const [ans, setAns] = useState("none");
	const [options] = useState(() => {
		const options = generate({exactly: 4, minLength: word.length, maxLength: word.length});
		if (!(word in options)) {
			options[Math.floor(Math.random() * 3) + 1] = word;
		};
		return options;
	});
	let optionsEnd = []; 
	for (let i = 0; i < options.length; i++) {
		const NString = translate(options[i], lang)
		optionsEnd.push(NString);
	}
	const clickHandle = (answer) => {
		const comp = translate(word, lang)
		if (ans === "good" || ans === "bad") {
			return
		}
		if (comp === answer) {
			setAns("good")
			try {
				const g = document.getElementById(comp);
				g.id = "good"
			} catch(err) {
			}
		} else {
			life( userData, setUserData, -1 );
			setAns("bad");
			try {
				const g = document.getElementById(comp);
				g.id = "good"
			} catch(err) {
			}
		}
	}
	const goNext = () => {
		setLes(les+1)
	}
	return (
		<div>
			<>
			<div class="word" id={ans}>
				{word} 
			</div>
			<div class="ansBox1">
			{optionsEnd.splice(0,2).map(item => (
			<div class="Button" id={item} onClick={() => clickHandle(item)}>
				{item}
			</div>
			))}
			</div>
			<div class="ansBox2">
			{optionsEnd.splice(0,2).map(item => (
			<div class="Button" id={item} onClick={() => clickHandle(item)}>
				{item}
			</div>
			))}
			</div>
			<div class="DuoMenu">
			{ans !== "none" && <div class="Button" onClick={goNext}>Next</div>}
			</div>
			</>
		</div>
	);
};

export default Ctw;
