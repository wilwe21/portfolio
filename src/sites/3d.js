import React, { useRef, useState } from 'react';
import TopBar from '../modules/topbar.js'
import Back from '../modules/back.js';
import { Canvas, useFrame } from '@react-three/fiber';
import Rbox from '../3D/models/Rbox.js';

function TD() {
	return (
		<div>
			<TopBar left={Back()} middle="Welcome" right=""/>
			<div class="MainBox">
				<Canvas>
					<Rbox />
				</Canvas>
			</div>
		</div>
	);
}

export default TD;
