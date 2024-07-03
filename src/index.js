import React from 'react';
import ReactDOM from 'react-dom/client';
import Duo from './sites/apps/duo.js';
import Translator from './sites/apps/translator.js';
import Mods from './sites/apps/mods.js';
import Dni from './sites/apps/dni.js';
import Tracker from './sites/apps/tracker.js';
import Main from './sites/main.js';
import About from './sites/about.js';
import Music from './sites/music.js';
import Art from './sites/art.js';
import Err from './sites/404.js';
import Apps from './sites/apps.js';
import TD from './sites/3d.js';
import Things from './sites/things.js';
import "./scss/main.scss";

import { HashRouter, Routes, Outlet, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<HashRouter>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/apps" element={<Apps />} />
			<Route path="/apps/duo" element={<Duo />} />
			<Route path="/apps/translator" element={<Translator />} />
			<Route path="/apps/mods" element={<Mods />} />
			<Route path="/apps/track" element={<Tracker />} />
			<Route path="/apps/dni" element={<Dni />} />
			<Route path="/music" element={<Music />} />
			<Route path="/art" element={<Art />} />
			<Route path="/about" element={<About />} />
			<Route path="/3d" element={<TD />} />
			<Route path="/things" element={<Things />} />
			<Route path="*" element={<Err />} />
		</Routes>
	</HashRouter>
  </React.StrictMode>
);
