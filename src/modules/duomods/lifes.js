
function life( userData, setUserData, amount ) {
	let liv = userData.lives
	const date = new Date()
	const milfs = 30 * 60 * 1000
	const ldat = userData.ldat ? new Date(userData.ldat) : date
	const max = userData.maxlives
	const set = () => {
		let date2 = null
		if (liv !== max) {
			date2 = new Date(ldat.getTime() + milfs)
		}
		if (liv > max) {
			liv = max
		}
		console.log(date2)
		setUserData({...userData, "lives": liv, "ldat": date2})	
	}
	if (ldat === null && amount === undefined) {
		return
	}
	if (ldat === null) {
		console.log("null")
	}
	if (amount !== 0 && amount !== undefined) {
		liv += amount
		set()
	}
	if (ldat <= date) {
		liv += 1
		set()
	}
}

export default life;
