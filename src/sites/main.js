import React from 'react';
import TopBar from '../modules/topbar.js'
import { Link } from 'react-router-dom';

function Main() {
	return (
		<div>
			<TopBar left="✨" middle="Welcome" right="✨"/>
			<div class="MainBox" id="invm">
				<Link to="/apps" class="Button" id="Apps">Apps</Link>
				<Link to="/3d" class="Button" id="TD">3D</Link>
				<Link to="/music" class="Button" id="Music">Music</Link>
				<Link to="/art" class="Button" id="Art">Art</Link>
				<a href="https://wilwe.itch.io/" target="_blank" class="Button" id="Itch">Itch.io</a>
				<a href="https://github.com/wilwe21" target="_blank" class="Button" id="Git">GitHub</a>
				<Link to="/about" class="Button" id="About">About Me</Link>
				<Link to="/things" class="Button" id="Random">Random</Link>
				<a href="https://youtu.be/8nF8PvNmuCc?si=PMgTC3_EtqBte6h5" title="My favorite color is 12" target="_blank" class="Button" id="Burgir">I'm really excited about burger</a>
			</div>
			<div class="MainBox" id="invd">
				<Link to="/apps" class="Button" id="Apps">Apps</Link>
				<h2 class="info" id="AppsInfo">Javascript React apps that i created</h2> 
				<Link to="/scripts" class="Button" id="Scripts">Scripts</Link>
				<h2 class="info" id="ScriptsInfo">Linux and Nautilus scripts</h2> 
				<Link to="/3d" class="Button" id="3D">3D</Link>
				<h2 class="info" id="TDInfo">My 3D Models (Under construction)</h2> 
				<Link to="/music" class="Button" id="Music">Music</Link>
				<h2 class="info" id="MusicInfo">Music that i created (Not best but yes)</h2> 
				<Link to="/art" class="Button" id="Art">Art</Link>
				<h2 class="info" id="ArtInfo">My artwork</h2> 
				<a href="https://wilwe.itch.io/" target="_blank" class="Button" id="Itch">Itch.io</a>
				<h2 class="info" id="ItchInfo">Itch.io where i post my games</h2> 
				<a href="https://github.com/wilwe21" target="_blank" class="Button" id="Git">GitHub</a>
				<h2 class="info" id="GitInfo">GitHub where is a lot of projects. My linux dot's, this site, and linux scripts whitch make my life easier</h2> 
				<Link to="/about" class="Button" id="About">About Me</Link>
				<h2 class="info" id="AboutInfo">More Informations About Me</h2> 
				<Link to="/things" class="Button" id="Random">Random</Link>
				<h2 class="info" id="RandomInfo">Random Stuff from me (change when i want and it's on random moment)</h2> 
				<a href="https://youtu.be/igVIfT5dF-U?si=omtaSakoSFMVp9hv" title="Don't eat Keanu Reeves" target="_blank" class="Button" id="Burgir">Don't eat laws of thermodynamic</a>
			</div>
		</div>
	);
}

export default Main;
