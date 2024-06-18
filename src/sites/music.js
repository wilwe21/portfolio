import TopBar from '../modules/topbar.js';
import Back from "../modules/back.js";
import Dbmusic from '../modules/musicdb.js';

function Music() {
	return (
		<div>
			<TopBar left={Back()} middle="Music" />
			<div>
				<div class="Mainbox">
					<Dbmusic />
				</div>
			</div>
		</div>
	)
}
export default Music;
