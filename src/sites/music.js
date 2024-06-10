import { Link } from 'react-router-dom';
import TopBar from '../modules/topbar.js';
import Dbmusic from '../modules/musicdb.js';

function Music() {
	return (
		<div>
			<TopBar middle="chuj" />
			<div>
				<div class="Mainbox">
				<Dbmusic />
				</div>
				<div class="MainBox">
				<Link to="/" class="Button">Back</Link>
				</div>
			</div>
		</div>
	)
}
export default Music;
