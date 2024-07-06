import { useState, useEffect } from 'react'
import TopBar from '../modules/topbar.js'
import Back from "../modules/back.js"
import SDB from "../scripts/sdb.js"

function Scripts() {
	const [current, setCurrent] = useState(0)
	return (
		<div>
			<TopBar left={Back()} middle={SDB[current].name} />
			<div class="ScriptDsc">
				{SDB[current].desc}
			</div>
			<div class="Script">
				{SDB[current].script}
			</div>
		</div>
	)
}

export default Scripts
