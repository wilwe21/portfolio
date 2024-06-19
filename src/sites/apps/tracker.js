import { useState, useEffect } from 'react'
import TopBar from "../../modules/topbar.js"
import Back from "../../modules/back.js"
import Truck from "../../modules/track.js"

function Track() {
	const [data, setData] = useState(() => {
		const data = JSON.parse(localStorage.getItem('TrackerData'))
		return data ? data : [{"name": "test", "value": 20, "currency": "PLN"},{"name": "test2", "value": 200, "currency": "PLN"}]
	})
	useEffect(() => {
		localStorage.setItem('TrackerData', JSON.stringify(data))
	}, [data, setData])
	
	const Add = () => {
		setData([...data, {"name": "sus", "value": 40, "currency": "PLN"}])	
	}	
	return (
		<div>
			<TopBar left={Back("/apps")} middle="Tracker" right={<div class="BackButton" onClick={Add}>add</div>} />
			<Truck data={data} setData={setData} />
		</div>
	)
}

export default Track;
