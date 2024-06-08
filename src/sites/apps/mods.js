import { Link } from 'react-router-dom'
import TopBar from '../../modules/topbar.js'
function Mods() {
	return (
		<div>
			<TopBar middle="Chuj" />
			<Link to="/apps" class="Button">Back</Link>
		</div>
	)
}

export default Mods
