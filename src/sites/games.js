import { Link } from 'react-router-dom';
import TopBar from '../modules/topbar';
function Games() {
	return (
		<div>
			<TopBar left="" middle="Games" right="" />
			<div class="MainBox">
				<Link to="/games/duo" class="Button">Duo</Link>
				<Link to="/" class="Button">Back</Link>
			</div>
		</div>
	);
}

export default Games;
