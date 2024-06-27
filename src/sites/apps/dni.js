import { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"
import TopBar from "../../modules/topbar.js"
import Back from '../../modules/back.js'
import DniS from "../../modules/dnishow.js"

const defval = [{
	"id": uuid(),
	"name": "test",
	"day": 2
},
{
	"id": uuid(),
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
		setPopUp(false)
		var name = document.getElementById('Add name').value
		var val = document.getElementById('Add days').value
		setDni([...dni, {"id": uuid(), "name": name, "day": val}])
	}
	useEffect(() => {
		localStorage.setItem("Dni", JSON.stringify(dni))
	})
	return (
		<div>
			{popUp && <div class="PopUpContainer">
				<TopBar middle="Add value" tpcl="TpPopup" />
				<div class="MainBox">
					<input
						id="Add name"
						class="Button"
						placeholder="Name"
					/>
				</div>
				<div class="MainBox">
					<input
						id="Add days"
						type="Number"
						class="Button"
						placeholder="days"
					/>
				</div>
				<div class="MainBox">
					<div class="Button" onClick={()=> setPopUp(false)}>Go Back</div>
					<div class="Button" onClick={add}>Add</div>
				</div>
			</div>}
			<TopBar left={Back("/apps")} middle="Dni" right={<div class="BackButton" onClick={() => setPopUp(true)}>Add</div>} />
			<DniS dni={dni} setDni={setDni} />
		</div>
	)
}

export default Dni;
