import TopBar from "../modules/topbar.js";
import Back from "../modules/back.js";
import site from "../random/portfolio.ogg"
import dots from "../random/dots.ogg"

function Things() {
	return (
		<div>
			<TopBar left={Back()} middle="Random files as video (filecore)" right=""/>
			<h1>This website State from 20:00 4.7.2024</h1>
			<video width="256" height="256" controls>
				<source src={site} type="video/mp4" />
			</video>
			<h1>My Linux Config State from 17:00 6.7.2024</h1>
			<video width="256" height="256" controls>
				<source src={dots} type="video/mp4" />
			</video>
		</div>
	);
}

export default Things;
