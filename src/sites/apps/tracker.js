import TopBar from "../../modules/topbar.js"
import Back from "../../modules/back.js"
import Truck from "../../modules/track.js"

function Track() {
	return (
		<div>
			<TopBar left={Back("/apps")} middle="Tracker" right={<Truck add={true}/>} />
			<Truck />
		</div>
	)
}

export default Track;
