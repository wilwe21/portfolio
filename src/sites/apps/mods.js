import { Link } from 'react-router-dom'
import TopBar from '../../modules/topbar.js'
import template from '../../templates.js'
import langs from '../../lang.js'

function Mods() {
	return (
		<div>
			<TopBar middle="Mods" />
			<div>
				<h2>Duo presest</h2>
				<div class="ModArea">
					<textarea value={JSON.stringify(template.braill).replace(/,/g, ",\n")} class="Mod" height="300" />
				</div>
			</div>
			<div>
				<h2>Language</h2>
				<div class="ModArea">
					<textarea value={JSON.stringify(langs.braill).replace(/,/g, ",\n")} class="Mod" />
				</div>
			</div>
			<div class="MainBox">
				<Link to="/apps" class="Button">Back</Link>
			</div>
		</div>
	)
}

export default Mods
