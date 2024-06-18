import TopBar from "../../modules/topbar.js"
import { Link } from 'react-router-dom'

function Track() {
	return (
		<div>
			<TopBar left={<Link to="/apps" class="Button">Back</Link>} middle="Tracker" />
		</div>
	)
}

export default Track;
