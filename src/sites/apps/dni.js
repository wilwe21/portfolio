import { useState, useEffect } from "react"
import TopBar from "../../modules/topbar.js"
import Back from '../../modules/back.js'

const defval = [{
	"name": "test",
	"day": 2
},
{
	"name": "test2",
	"day": 4
}]

function Dni() {
	const [dni, setDni] = useState(() => {
		const data = JSON.parse(localStorage.getItem('Dni'))
		return data ? data : defval
	})
	const [popUp, setPopUp] = useState(false)
	const add = () => {
		setPopUp(true)
		console.log(popUp)
	}
	return (
		<div>
			{popUp && <div>
				popUp
			</div>}
			<TopBar left={Back("/apps")} middle="Chuj" right={<div class="BackButton" onClick={add}>Add</div>} />
			{dni.map(key => (
				<>
				<div>{key.name} {key.day}</div>
				</>
			))}
		</div>
	)
}

export default Dni;
