import React from 'react';
import ReactDOM from 'react-dom/client';
import Duo from './modules/duo.js';
import Main from './modules/main.js';
import About from './modules/about.js';
import Err from './modules/404.js';
import "./scss/main.scss";

import { BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/duo" element={<Duo />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Err />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);
