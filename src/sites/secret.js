import { Canvas } from '@react-three/fiber'

function Secret() {
	return(
		<>
		<Canvas>
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} />
		</Canvas>
		</>
	)
}

export default Secret