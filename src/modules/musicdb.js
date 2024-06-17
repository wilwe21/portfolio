import musicDB from "../music/db.js";
import print from "./mspr.js";
function Dbmusic() {
	return (
		<div class="MusicBox">
			<h1>Short</h1>
			{musicDB.short.map(key => print(key))}
			<h1>Medium</h1>
			{musicDB.medium.map(key => print(key))}
			<h1>Long</h1>
			{musicDB.long.map(key => print(key))}
		</div>
	);
}
export default Dbmusic;
