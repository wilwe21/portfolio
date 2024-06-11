import { Link } from 'react-router-dom'
import TopBar from "../modules/topbar.js"
import artDb from "../art/db.js"
function Art() {
	console.log(artDb)
	return (
		<div>
			<TopBar middle="Art" />
			<div class="MainBox">
				{artDb.map((item) => (
					<div>
					<h1>{item.name}</h1>
					<img src={item.img} />
					</div>
				))}
			</div>
			<div class="MainBox">
				<Link to="/" class="Button">Back</Link>
			</div>
		</div>
	)
}

export default Art;
