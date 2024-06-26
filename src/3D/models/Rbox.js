import Box from '../components/Box.js';

export default function Rbox() {
	return (
		<>
		<ambientLight intensity={Math.PI / 2} />
    	<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
   	 	<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
		<Box position={[0, 0, 0]} />
		<Box position={[2, 0, 0]} />
		<Box position={[-0, 0, 0]} />
		<Box position={[-2, 0, 0]} />
		<Box position={[0, 1, 0]} />
		<Box position={[2, 1, 0]} />
		<Box position={[-0, 1, 0]} />
		<Box position={[-2, 1, 0]} />
		<Box position={[0, -1, 0]} />
		<Box position={[2, -1, 0]} />
		<Box position={[-0, -1, 0]} />
		<Box position={[-2, -1, 0]} />
		<Box position={[0, -2, 0]} />
		<Box position={[2, -2, 0]} />
		<Box position={[-0, -2, 0]} />
		<Box position={[-2, -2, 0]} />
		</>
	)
}
