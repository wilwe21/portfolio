import TopBar from "../../modules/topbar.js"
import Back from "../../modules/back.js"

function Track() {
	return (
		<div>
			<TopBar left={Back("/apps")} middle="Tracker" />
		</div>
	)
}

export default Track;
