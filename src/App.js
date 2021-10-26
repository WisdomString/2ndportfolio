import { MathUtils } from 'three'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment} from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { OrbitControls,Text } from '@react-three/drei'

const particles = Array.from({ length: 100 }, () => ({
  factor: MathUtils.randInt(20, 10),
  speed: MathUtils.randFloat(0.01, 1),
  xFactor: MathUtils.randFloatSpread(100),
  yFactor: MathUtils.randFloatSpread(40),
  zFactor: MathUtils.randFloatSpread(40)
}))

export default function App() {
  return (
    <Canvas 
    shadows dpr={[0.8, 2]}
    gl={{ alpha: true, antialias: true }} 
    camera={{ fov: 30, position: [40, 10, 40], near: 10, far: 150 }}>
    
      <color attach="background" args={['white']} />
      
      <fog attach="fog" args={['blue', 60, 110]} />
    
      <ambientLight intensity={1.5} />
      <Bubbles />
      <EffectComposer multisampling={0}>
        <SSAO 
        samples={10} 
        radius={10} 
        intensity={10} 
        luminanceInfluence={0.1} 
        color="white" />
      </EffectComposer>
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>

      <OrbitControls 
      minPolarAngle={Math.PI / 5} 
      maxPolarAngle={Math.PI / 1.5}
      rotateSpeed = {0.3}
      maxDistance={60}
       />

      

      <Text
        scale={[10, 10, 10]}
        color="black" // default
        anchorX="center" // default
        anchorY={-1} // default
        position-z={50}
        rotation-y={3}
        fontSize={0.5}
        color="#f0f340"
      >
        HELLO
      </Text>
      <Text
        scale={[10, 10, 10]}
        color="black" // default
        anchorX="center" // default
        anchorY={-0.18} // default
        position-z={50}// zed position
        rotation-y={3}
      >
       Uhmm ... sorry about the mess. I may have spawned too much particles. This is only an experimental
       website, My testing grounds for buggy codes...anyways..
      </Text>
      <Text
        scale={[10, 10, 10]}
        color="black" // default
        anchorX="center" // default
        anchorY="center" // default
        position-z={50}
        rotation-y={3}
      >
       My name is Vince Ivan Pulido.
      </Text>
      <Text
        scale={[10, 10, 10]}
        color="black" // default
        anchorX="center" // default
        anchorY={0.18} // default
        position-z={50}
        rotation-y={3}
        maxWidth={4}
        textAlign="left"
      >
        Im a fresh graduate of Bachelor of Science and Computer Engineering
         from Holy Trinity College .
         If you want more info, you can click those 2 icons (twitter and facebook) below that
        i stole from Font-Awesome.com(just joking)...
        it will open a new tab and lead you
        To my respective accounts if you have any questions to ask...
      </Text>


    </Canvas>
  )
}

function Bubbles() {
  const ref = useRef()
  useFrame((state, delta) => void 
  (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 0.75, delta)))
  return (
    <Instances 
     limit={particles.length}
     ref={ref} 
     castShadow 
     receiveShadow 
     position={[0, 10, 0]}>
      <planeBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0} color="#f0f0f0" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  )
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }) {
  const ref = useRef()
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 4)
    ref.current.scale.setScalar(Math.max(3, Math.cos(t) * 7))
    ref.current.position.set(
      Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
    )
  })
  return <Instance ref={ref} />
}

