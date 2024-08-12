import TopBar from "../modules/topbar.js"
import Back from "../modules/back.js"

function Diary() {
	return (
		<div>
			<TopBar left={Back()} middle="Diary" right="" />
		</div>
	)
}

export default Diary;
