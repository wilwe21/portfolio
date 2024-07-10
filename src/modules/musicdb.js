import musicDB from "../music/db.js";
import print from "./mspr.js";
function Dbmusic({ album }) {
	return (
		<div class="MusicBox">
			<h3>Album: {album}</h3>
			{musicDB[album].map(key => print(key))}
		</div>
	);
}
export default Dbmusic;
