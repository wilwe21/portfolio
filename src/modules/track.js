function Truck({ data, setData }) {
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
	return (
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
	)
}

export default Truck;
