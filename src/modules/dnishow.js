function DniS({ dni, setDni }) {
	const Remove = (who) => {
		if (who > -1) {
			var ddd = dni
			ddd.splice(who, 1)
			setDni([...ddd])
		}
	}
	return (
		<div class="MainBox">
			{dni.map(key => (
				<div class="TrackBox">
					<strong>
						{key.name}
					</strong>
					<strong class="text">
						{key.day}
					</strong>
					<div onClick={()=> Remove(dni.indexOf(key))}>
						remove
					</div>
				</div>
			))}
		</div>
	)
}

export default DniS;
