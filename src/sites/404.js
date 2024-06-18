import TopBar from '../modules/topbar.js';
import Back from '../modules/back.js'
function Err() {
	return (
		<div>
			<TopBar left={Back()} middle="Error 404" right="" />
			<h1 class="txtCenter">error idk</h1>
		</div>
	);
}

export default Err;
