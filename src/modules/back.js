import { Link } from 'react-router-dom';

function Back(to="/") {
	return(
		<Link to={to} class="BackButton">Back</Link>
	)
}

export default Back;
