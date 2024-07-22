import car from "../secret/carousel.wav"
import TopBar from "../modules/topbar.js"
import Back from "../modules/back.js"

function Secret() {
	return(
		<>
			<TopBar left={Back()} middle="Super Secret Room" />
			<audio src={car} controls={true}/>
		</>
	)
}

export default Secret
