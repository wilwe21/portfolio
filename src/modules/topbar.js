function TopBar({left, middle, right, tpcl}) {
	var tpclass = "TopBar2"
	if ( right !== "" && right != null) {
		tpclass = "TopBar"
	}
	if (tpcl != null) {
		tpclass = tpcl
	}

	return (
		<div class={tpclass}>
			<div>{left}</div>
			<div>{middle}</div>
			{right && <div>{right}</div>}
		</div>
	)
}

export default TopBar;
