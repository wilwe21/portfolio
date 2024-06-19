function TopBar({left, middle, right}) {
	var tpclass = "TopBar2"
	if ( right != "" && right != null) {
		tpclass = "TopBar"
	}

	return (
		<div class={tpclass}>
			<div>{left}</div>
			<div>{middle}</div>
			<div>{right}</div>
		</div>
	)
}

export default TopBar;
