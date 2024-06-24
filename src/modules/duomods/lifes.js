
function life( userData, setUserData, amount ) {
	let liv = userData.lives
	const date = new Date()
	const milfs = 30 * 60 * 1000
	let ldat = userData.ldat ? new Date(userData.ldat) : date
	const ldatmmm = ldat.toISOString().slice(0,10).replace(/-/g,"")
	const datemmm = date.toISOString().slice(0,10).replace(/-/g,"")
	const max = userData.maxlives
	const set = () => {
		let date2 = null
		if (liv !== max) {
			date2 = new Date(ldat.getTime() + milfs)
		}
		if (liv > max) {
			liv = max
		}
		setUserData({...userData, "lives": liv, "ldat": date2})	
	}
	if (ldat === null && amount === undefined) {
		return
	}
	if (ldat === null) {
		return
	}
	if (ldatmmm < datemmm) {
		liv = max
		console.log("max i chuj")
		set()
		return
	}
	if (ldat <= date) {
		liv += 1
		set()
	}
	if (amount !== 0 && amount !== undefined) {
		liv += amount
		set()
	}
}

export default life;
