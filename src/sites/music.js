import { Link } from 'react-router-dom';
import TopBar from '../modules/topbar.js';
import Dbmusic from '../modules/musicdb.js';

function Music() {
	return (
		<div>
			<TopBar left={<Link to="/" class="Button">Back</Link>} middle="Music" />
			<div>
				<div class="Mainbox">
					<Dbmusic />
				</div>
			</div>
		</div>
	)
}
export default Music;
