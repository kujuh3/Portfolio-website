import React from "react";
import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { CirclePicker } from 'react-color';
import { makeStyles } from '@mui/styles';
import { EffectComposer ,Bloom } from '@react-three/postprocessing'

const useStyles = makeStyles({
  swab:{
    zIndex: "2",
    marginTop: "auto !important",
    marginBottom: "auto !important",
    marginRight: "0 !important",
    width: "inherit !important",
    display: "block !important",
    flexWrap: " !important",
    },
});


export default function App() {
  const styles = useStyles();
  const [color, setColor] = useState("#FFFF");
  const [swapArray, setSwapArray] = useState([
    "#FFFF", "#ffa700", "#62ff00", "#00fffb", "#ff7dd1"
  ])

  return (<>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Effects/>
      <Stars sentcolor={color} />
    </Canvas>
    <CirclePicker
    className={styles.swab}
    colors={swapArray}
    onChangeComplete={(e) => setColor(e)}
    />
    </>
  )
}

const Effects = React.forwardRef((props, ref) => {
  return (
    <EffectComposer multisampling={1}>
      <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9}/>
    </EffectComposer>
  )
})

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 1.5 }))
  var speedx = 0;
  var speedy = 5;
  var white = props.sentcolor.hex;

  useFrame((state, delta) => {
    if(speedy < 25){
      speedx+=0.01
      speedy+=0.05
    }
    ref.current.rotation.x -= delta / speedx
    ref.current.rotation.y -= delta / speedy
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color={white} size={0.01} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

