import musicDB from "../music/db.js";
import print from "./mspr.js";
function Dbmusic() {
	return (
		<div class="MusicBox">
			{musicDB.short.map(key => print(key))}
		</div>
	);
}
export default Dbmusic;
