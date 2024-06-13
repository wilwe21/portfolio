function print(key) {
	return (
		<>
			<h1 class="text">{key.name}</h1>
			{key.cover && <img src={key.cover} />}
			<audio src={key.sound} controls="true" />
			{key.wave && <a href={key.wave} download={key.name} class="Button">Download Vital wave</a> }
		</>
	)
}

export default print;
