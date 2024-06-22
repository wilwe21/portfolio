import TopBar from '../../modules/topbar.js'
import Back from '../../modules/back.js'
import template from '../../templates.js'
import langs from '../../lang.js'

function Mods() {
	return (
		<div>
			<TopBar left={Back("/apps")} middle="Mods" />
			<div>
				<h1 class="heart">Don't work yet</h1>
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
		</div>
	)
}

export default Mods
