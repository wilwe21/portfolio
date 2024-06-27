import { useState, useEffect } from "react"
import TopBar from "./topbar.js"
function DniS({ dni, setDni }) {
	const [popUp, setPopUp] = useState(false)
	const [editVal, setEditVal] = useState("")
	const Remove = (who) => {
		if (who > -1) {
			var ddd = dni
			ddd.splice(who, 1)
			setDni([...ddd])
		}
	}
	const Add = (who) => {
		if (who > -1) {
			var ddd = dni
			var dss = parseInt(ddd[who].day) + 1
			ddd[who].day = dss
			setDni([...ddd])
		}
	}
	const Edit = (who) => {
		if (who > -1) {
			setEditVal(who)
			setPopUp(true)
		}
	}
	const ed = () => {
		var EName = document.getElementById('Edit Name').value
		var EDni = document.getElementById('Edit Days').value
		if (EDni === ""){
			Remove(editVal)
			setPopUp(false)
		}
	}
	const com = () => {
		Add(editVal)
		setPopUp(false)
	}
	return (
		<div class="MainBox">
			{popUp && <div class="PopUpContainer">
				<TopBar middle="Edit value" tpcl="TpPopup" />
				<div class="MainBox">
					<input
						id="Edit Name"
						class="Button"
						placeholder="Edit Name"
					/>
				</div>
				<div class="MainBox">
					<input
						id="Edit Days"
						type="Number"
						class="Button"
						placeholder="Edit Days"
					/>
				</div>
				<div class="MainBox">
					<div class="Button" onClick={()=> setPopUp(false)}>Go Back</div>
					<div class="Button" onClick={ed}>Edit</div>
					<div class="Button" onClick={com}>commit</div>
				</div>
			</div>}
			{dni.map(key => (
				<div class="TrackBox">
					<strong>
						{key.name}
					</strong>
					<strong class="text">
						{key.day}
					</strong>
					<div class="BackButton" onClick={()=> Edit(dni.indexOf(key))}>Edit</div>
				</div>
			))}
		</div>
	)
}

export default DniS;
