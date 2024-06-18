import React, { useRef, useState } from 'react';
import TopBar from '../modules/topbar.js'
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import Rbox from '../3D/models/Rbox.js';

function TD() {
	return (
		<div>
			<TopBar left={<Link to="/" class="Button">Back</Link>} middle="Welcome" right=""/>
			<div class="MainBox">
				<Canvas>
					<Rbox />
				</Canvas>
			</div>
		</div>
	);
}

export default TD;
