import { Link } from 'react-router-dom';
import TopBar from '../modules/topbar';
function Games() {
	return (
		<div>
			<TopBar left="" middle="Apps" right="" />
			<div class="MainBox"> 
				<Link to="/apps/duo" class="Button">Duo</Link>
				<Link to="/apps/translator" class="Button">Translator</Link>
				<Link to="/" class="Button">Back</Link>
			</div>
		</div>
	);
}

export default Games;
