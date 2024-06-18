import TopBar from "../modules/topbar.js";
import Back from "../modules/back.js";

function About() {
	return (
		<div>
			<TopBar left={Back()} middle="About Me" right=""/>
			<div class="txt">
				So... hi i'm wilwe and you want to known more about me. I'm poland programer music creator and 3D artist on my daily drive i use arch (btw). On this site you can finde stuff made by me and some other things that i'm want to share with other people like my social preferences and inspirations all things will be posted on github especially ono this site.
			</div>
		</div>
	);
}

export default About;
