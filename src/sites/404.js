import { Link } from 'react-router-dom';
import TopBar from '../modules/topbar.js';
function Err() {
	return (
		<div>
			<TopBar left={<Link to="/" class="Button">Back</Link>} middle="Error 404" right="" />
			<h1>error idk</h1>
		</div>
	);
}

export default Err;
