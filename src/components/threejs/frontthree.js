import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { EffectComposer ,Bloom, DepthOfField } from '@react-three/postprocessing'


function Box1({position}) {
  const mesh = useRef()
  var speedx = 0;
  var speedy = 5;

  useFrame((state, delta) => {
    if(speedy < 25){
      speedx+=0.01
      speedy+=0.01
    }
    mesh.current.rotation.x -= delta / speedx
    mesh.current.rotation.y -= delta / speedy
   });
  return (
    <mesh scale={2} position={position} ref={mesh}>
      <boxGeometry/>
      <meshStandardMaterial  wireframe color="#8c5c00" depthWrite={true} />
    </mesh>
  )
}

function Box2({position}) {
  const mesh = useRef()
  var speedx = 0;
  var speedy = 5;

  useFrame((state, delta) => {
    if(speedy < 25){
      speedx+=0.01
      speedy+=0.01
    }
    mesh.current.rotation.x -= delta / speedx
    mesh.current.rotation.y -= delta / speedy
   });
  return (
    <mesh scale={2} position={position} ref={mesh}>
      <boxGeometry/>
      <meshStandardMaterial transparent={true} opacity={1} color="#271542" depthWrite={true} />
    </mesh>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(100), { radius: 3.5 }))
  var speedx = 0;
  var speedy = 5;

  useFrame((state, delta) => {
    if(speedy < 25){
      speedx+=0.01
      speedy+=0.05
    }
    ref.current.rotation.x -= delta / speedx
    ref.current.rotation.y -= delta / speedy
  })
  return (<>
  <Effects/>
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true} {...props}>
        <PointMaterial transparent color="#ffa700" size={0.1} sizeAttenuation={true} depthWrite={true} />
      </Points>
    </group>
    </>
  )
}

const Effects = React.forwardRef((props, ref) => {
  return (
    <EffectComposer multisampling={0}>
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9}/>
      <DepthOfField  bokehScale={1} />
    </EffectComposer>
  )
})


export default function App() {

  return (
    <>
    <Canvas  linear flat colorManagement={false} camera={{position: [0,2,5] }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Box1 />
      <Box2 />
      <Stars/>
    </Canvas>
    </>
  )
}
