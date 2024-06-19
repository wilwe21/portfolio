import { useState, useEffect} from 'react'

function Truck({ add=false }) {
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
	const Remove = (who) => {
		if (who > -1) {
			const amount = parseFloat(document.getElementById(who).value)
			var rdata = data
			var val = parseFloat(rdata[who].value)
			if ( val + amount != 0 && !isNaN(val + amount)) {
				rdata[who].value = val + amount
				setData([...rdata])
			} else {
				rdata.splice(who, 1)
				setData([...rdata])
			}
		}
	}
	if (add) {
		return (
			<>
				<div class="BackButton" onClick={Add}>
					add
				</div>
			</>
		)
	} else {
		return (
			<>
				<div class="BackButton" onClick={Add}>
					add
				</div>
				<div class="MainBox">
					{data.map(key => (
						<div class="TrackBox">
							<strong>
								{key.name}
							</strong>
							<strong class="text">
								{key.value}{key.currency ? key.currency : ""}
							</strong>
							<div>
							<input class="InputButton" id={data.indexOf(key)} type="number" />
							<div onClick={() => Remove(data.indexOf(key))}>
								add
							</div>
							</div>
						</div>
					))}
				</div>
			</>
		)
	}
}

export default Truck;
