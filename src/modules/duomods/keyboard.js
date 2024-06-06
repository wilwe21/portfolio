function ShowKeys({ lang }) {
	return (
		<div class="MainBox">
			{Object.values(lang).map((key) => (
				<div class="Button">
					{key}
				</div>
			))}
		</div>
	);
}

export default ShowKeys;
