import React from 'react';
import ReactDOM from 'react-dom/client';
import Duo from './modules/duo';
import Main from './modules/main.js';
import "./scss/main.scss";

import { BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/main" element={<Main />} />
			<Route path="/" element={<Duo />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);
