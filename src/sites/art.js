import TopBar from "../modules/topbar.js"
import Back from "../modules/back.js"
import artDb from "../art/db.js"
function Art() {
	console.log(artDb)
	return (
		<div>
			<TopBar left={Back()} middle="Art" right="" />
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
