import musicDB from "../music/db.js";
function Dbmusic() {
	console.log(musicDB.short.sans.wave)
	return (
		<div class="MusicBox">
			<h1 class="text">{musicDB.short.sans.name}</h1>
			<img src={musicDB.short.sans.cover} />
			<audio src={musicDB.short.sans.sound} controls="true" />
			<a href={musicDB.short.sans.wave} download={musicDB.short.sans.name} class="Button">Download Vital wave</a>
		</div>
	);
}
export default Dbmusic;
