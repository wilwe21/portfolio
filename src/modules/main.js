import React from 'react';
import Duo from "./duo.js";
import TopBar from './mainmods/topbar.js'

import { BrowserRouter as Router, Route} from "react-router-dom";

function Main() {
	return (
		<div>
			<TopBar />
			<link to="/duo" class="Button">chuj</link>
		</div>
	);
}

export default Main;
