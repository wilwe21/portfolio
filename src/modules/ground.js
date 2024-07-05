import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Ground() {
	const sceneRef = useRef(null);
	const cameraRef = useRef(null);

	useEffect(() => {
  		const scene = new THREE.Scene();
  		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  		const renderer = new THREE.WebGLRenderer({ antialias: true });
  		renderer.setSize(window.innerWidth, window.innerHeight);
  		sceneRef.current.appendChild(renderer.domElement);

  // ... (rest of the floor creation)

  		return () => {
    		sceneRef.current.removeChild(renderer.domElement);
  		};
	}, []);

	const planeGeometry = new THREE.PlaneGeometry(10, 10); // Adjust width and height as needed

	const floorMaterial = new THREE.MeshBasicMaterial({ color: 'white' });

	const floorMesh = new THREE.Mesh(planeGeometry, floorMaterial);
	scene.add(floorMesh);
}
export default Ground
