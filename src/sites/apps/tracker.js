import { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"
import TopBar from "../../modules/topbar.js"
import Back from "../../modules/back.js"
import Truck from "../../modules/track.js"

const defval = [
	{
		"id": uuid(),
		"name": "test",
		"value": 20,
		"currency": "PLN"
	},{
		"id": uuid(),
		"name": "test2",
		"value": 200,
		"currency": "PLN"
	}
]

function Track() {
	const [data, setData] = useState(() => {
		const data = JSON.parse(localStorage.getItem('TrackerData'))
		return data ? data : defval
	})
	const [popUp, setPopup] = useState(false)
	useEffect(() => {
		localStorage.setItem('TrackerData', JSON.stringify(data))
	}, [data, setData])
	
	const pop = () => {
		setPopup(true)
	}	
	const Add = () => {
		setPopup(false)
		var name = document.getElementById("AddName").value
		var value = parseFloat(document.getElementById("AddValue").value)
		setData([...data, {"id": uuid(), "name": name, "value": value, "currency": "PLN"}])	
	}
	return (
		<div>
			{popUp && 
				<div class="PopUpContainer">
					<TopBar middle="Add Value" tpcl="TpPopup" />
					<div class="MainBox">
						<input
							id="AddName"
							class="Button"
							placeholder="Name"
						/>
					</div>
					<div class="MainBox">
						<input
							id="AddValue"
							class="Button"
							placeholder="Value"
							type="number"
						/>
					</div>
					<div class="MainBox">
						<div class="Button" onClick={() => setPopup(false)}>Go Back</div>
						<div class="Button" onClick={Add}>Add</div>
					</div>
				</div>
			}
			<TopBar left={Back("/apps")} middle="Tracker" right={<div class="BackButton" onClick={pop}>add</div>} />
			<Truck data={data} setData={setData} />
		</div>
	)
}

export default Track;
