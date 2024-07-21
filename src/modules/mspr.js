import AudioPlayer from './AudioPlayer.js'

function print(key) {
	return (
		<>
			<h1 class="text">{key.name}</h1>
			{key.cover && <img src={key.cover} />}
			<AudioPlayer src={key.sound} />
		</>
	)
}

export default print;
