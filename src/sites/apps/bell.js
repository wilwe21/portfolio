import { useState, useEffect } from 'react'
import TopBar from "../../modules/topbar.js"
import Back from "../../modules/back.js"

function Bell() {
	const [date, setDate] = useState(new Date())
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setDate(new Date())
		}, 1000)
		return () => clearInterval(timeInterval)
	}, [])
	let y = date.getFullYear()
	let m = date.getMonth()
	let d = date.getDate()
	const un = [new Date(y,m,d,8,0,0), new Date(y,m,d,8,45,0)]
	const dos = [new Date(y,m,d,8,55,0), new Date(y,m,d,9,40,0)]
	const tres = [new Date(y,m,d,9,50,0), new Date(y,m,d,10,35,0)]
	const quad = [new Date(y,m,d,10,45,0), new Date(y,m,d,11,30,0)]
	const finco = [new Date(y,m,d,12,4,0), new Date(y,m,d,13,25,0)]
	const sex = [new Date(y,m,d,13,35,0), new Date(y,m,d,14,20,0)]
	const siete = [new Date(y,m,d,14,25,0), new Date(y,m,d,15,10,0)]
	const ocho = [new Date(y,m,d,15,15,0), new Date(y,m,d,16,0,0)]
	var ds = 0
	var ind = "Free"
	if (date < un[0]) {
		ds = un[0] - date
		ind = "Break"
	} else if (date < un[1]) {
		ds = un[1] - date
		ind = "Lesson"
	} else if (date < dos[0]) {
		ds = dos[0] - date
		ind = "Break"
	} else if (date < dos[1]) {
		ds = dos[1] - date
		ind = "Lesson"
	} else if (date < tres[0]) {
		ds = tres[0] - date
		ind = "Break"
	} else if (date < tres[1]) {
		ds = tres[1] - date
		ind = "Lesson"
	} else if (date < quad[0]) {
		ds = quad[0] - date
		ind = "Break"
	} else if (date < quad[1]) {
		ds = quad[1] - date
		ind = "Lesson"
	} else if (date < finco[0]) {
		ds = finco[0] - date
		ind = "Break"
	} else if (date < finco[1]) {
		ds = finco[1] - date
		ind = "Lesson"
	} else if (date < sex[0]) {
		ds = sex[0] - date
		ind = "Break"
	} else if (date < sex[1]) {
		ds = sex[1] - date
		ind = "Lesson"
	} else if (date < siete[0]) {
		ds = siete[0] - date
		ind = "Break"
	} else if (date < siete[1]) {
		ds = siete[1] - date
		ind = "Lesson"
	} else if (date < ocho[0]) {
		ds = ocho[0] - date 
		ind = "Break"
	} else if (date < ocho[1]) {
		ds = ocho[1] - date 
		ind = "Lesson"
	}
	let hs = Math.floor((ds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	let ms = Math.floor((ds % (1000 * 60 * 60)) / (1000 * 60));
  	let ss = Math.floor((ds % (1000 * 60)) / 1000);
	return (
		<div>
			<TopBar left={Back("/apps")} middle="Bell" />
			<h1>{hs > 9 ? hs : `0${hs}`}:{ms > 9 ? ms : `0${ms}`}:{ss > 9 ? ss : `0${ss}`}</h1>
			<h2>{ind}</h2>
		</div>
	)
}

export default Bell;
