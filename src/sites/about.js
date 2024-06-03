import TopBar from "../modules/topbar.js";
import { Link } from "react-router-dom";
function About() {
	return (
		<div>
			<TopBar left="✨" middle="About Me" right="✨"/>
			<div class="txt">
				So... You want to known more about me. I'm poland programer music creator and 3D artist on my daily drive i use arch (btw). On this site you can finde stuff made by me and some other things that i'm want to share with other people like my social preferences and inspirations.
			</div>
			<Link to="/" class="Button">Back</Link>
		</div>
	);
}

export default About;
