function streak( userData, setUserData ) {
	const date = new Date();
	const ldn = new Date(userData.streak.data);
	console.log(date)
	console.log(ldn);
	if ( ldn.getFullYear() > date.getFullYear() ) {
		console.log("new year");
	} else if ( date.getFullYear() > ldn.getFullYear() ){
		console.log("streak lost on new year")
	} else if ( ldn.getMonth() > date.getMonth() ) {
		console.log("new month")
	} else if ( date.getMonth() > ldn.getMonth() ){
		console.log("streak lost on new month")
	} else if ( ldn.getDate() > date.getDate() ) {
		console.log("new day")
	} else if ( date.getDate() > ldn.getDate() ){
		console.log("streak lost on random day")
	} else {
		console.log("wtf")
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
	console.log(userData.streak.count);
};

export default streak;
