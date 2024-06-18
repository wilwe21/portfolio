import { Link } from 'react-router-dom'
import TopBar from "../modules/topbar.js"
import artDb from "../art/db.js"
function Art() {
	console.log(artDb)
	return (
		<div>
			<TopBar left={<Link to="/" class="Button">Back</Link>} middle="Art" right="" />
			<div class="MainBox">
				{artDb.map((item) => (
					<div>
					<h1>{item.name}</h1>
					<img src={item.img} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Art;
