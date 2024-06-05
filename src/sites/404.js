import { Link } from 'react-router-dom';
function Err() {
	return (
		<div class="MainBox">
			<div>
				<h1>error propably 404 or not idk</h1>
				<Link to='/' class="Button">Main Page</Link>
			</div>
		</div>
	);
}

export default Err;
