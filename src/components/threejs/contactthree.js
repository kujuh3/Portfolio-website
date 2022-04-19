import { useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

export default function App() {
  const ref = useRef()
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const onMouseMove = e => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0
    ]);
  };
  return (
    <div ref={ref} className="container">
      <Canvas
        shadows
        frameloop="demand"
        rotation={rotation}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4] }}
        style={{ pointerEvents: 'none' }}
        onMouseMove={onMouseMove}
        // In order for two dom nodes to be able to receive events they must share
        // the same source. By re-connecting the canvas to a parent that contains the
        // text content as well as the canvas we do just that.
        onCreated={(state) => state.events.connect(ref.current)}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow shadow-mapSize={[2024, 2024]} />
        <pointLight position={[10, 0, 0]} />
        
      </Canvas>
    </div>
  )
}