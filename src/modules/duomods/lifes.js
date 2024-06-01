function check(one, two) {
	return one.getTime() > two.getTime();
};

function life( userData, setUserData, amount ) {
	const date = new Date();
	let liv = userData.lives +amount;
	const ldat = new Date(userData.ldat);
	const max = userData.maxlives;
	const add = () => {
		ldat.setMinutes(ldat.getMinutes()+30);
		if (check(date, ldat)) {
			liv += 1;
			setUserData({...userData, "lives": liv, "ldat": ldat});
		} else {	
			setUserData({...userData, "lives": liv});
		}
	}
	const remove = () => {
		if ( userData.ldat === null ) {
			setUserData({...userData, "lives": liv, "ldat": date});
		} else {
			setUserData({...userData, "lives": liv, "ldat": ldat});
		}
	}
	if ( amount === 0) {
		add();
	} else {
		remove();
	}
};

export default life;
