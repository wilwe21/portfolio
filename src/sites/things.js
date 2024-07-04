import TopBar from "../modules/topbar.js";
import Back from "../modules/back.js";
import site from "../random/portfolio.ogg"

function Things() {
	return (
		<div>
			<TopBar left={Back()} middle="This Site as video pls enjoy" right=""/>
			<h1>State from 20:00 4.7.2024</h1>
			<video width="256" height="256" controls>
				<source src={site} type="video/mp4" />
			</video>
		</div>
	);
}

export default Things;
