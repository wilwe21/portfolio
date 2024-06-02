import React from 'react';
import ReactDOM from 'react-dom/client';
import Duo from './modules/duo';
import Main from './modules/main.js';
import "./scss/main.scss";

import { BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<BrowserRouter basename="/">
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/duo" element={<Duo />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);
