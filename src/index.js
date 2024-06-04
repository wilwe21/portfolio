import React from 'react';
import ReactDOM from 'react-dom/client';
import Duo from './sites/duo.js';
import Main from './sites/main.js';
import About from './sites/about.js';
import Err from './sites/404.js';
import Games from './sites/games.js';
import "./scss/main.scss";

import { BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/games/duo" element={<Duo />} />
			<Route path="/about" element={<About />} />
			<Route path="/games" element={<Games />} />
			<Route path="*" element={<Err />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);
