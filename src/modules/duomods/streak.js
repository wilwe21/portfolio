function streak( userData, setUserData, check = false, reset = false ) {
	const date = new Date()
	const form = date.toISOString().slice(0,10).replace(/-/g,"")
	const ldn = new Date(userData.streak.data)
	const ldnfor = ldn.toISOString().slice(0,10).replace(/-/g,"")
	console.log(date)
	console.log(ldn)
	console.log(ldnfor)
	console.log(form)
	if (check) {
		if (ldnfor < form) {
			console.log("reset")
			return "gray"
		} else if (ldnfor === form) {
			console.log("streak today")
			return "gray"
		} else if (ldnfor > form) {
			console.log("streak life")
			return "red"
		}
	} else if (reset) {
		console.log("force Reset")	
	} else {
		console.log("smth else")	
		if (ldnfor <= form) {
			console.log("streak Up")
			date.setDate(date.getDate() +1);
			const end = date.toISOString().slice(0,10)
			const streak = userData.streak.count + 1;
			setUserData({...userData, "streak": {"count": streak, "data": end}})
		}
	}
	/*if ( ndnum === ldnum ){
		date.setDate(date.getDate() + 1);
		const streak = userData.streak.count + 1;
		console.log(date.getFullYear(), date.getMonth()+1,date.getDate());
		const dat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
		setUserData({...userData, "streak": {"count": streak, "data": dat}})
	} else if ( ndnum > ldnum ) {
		const dato = new Date();
		console.log("chuj");
		const dat = `${dato.getFullYear()}-${dato.getMonth()+1}-${dato.getDate()}`;
		setUserData({...userData, "streak": {"count": 0, "data": dat}});
	}*/
};

export default streak;
