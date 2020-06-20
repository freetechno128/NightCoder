import lerp from "lerp"
import React, { Suspense, useRef, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import { HTML } from 'drei';
import { TextureLoader, LinearFilter } from "three"
import { Block, useBlock } from "./blocks"
import state from "./store"
import "./styles.scss"


function Plane({ color = "white", map, ...props }) {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={color} map={map} />
    </mesh>
  )
}

function Content({ left, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock();
  const aspect = 1.62;
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#fff" map={map} />
      {children}
    </group>
  )
}

function Stripe() {
  const { contentMaxWidth } = useBlock()
  return <Plane scale={[100, contentMaxWidth, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#101020" />
}

function Pages() {
  const textures = useLoader(TextureLoader, state.images);
  const [img1, img2, img3] = textures.map(texture => ((texture.minFilter = LinearFilter), texture));
  const { contentMaxWidth, mobile } = useBlock();
  const aspect = 1.75;
  const pixelWidth = contentMaxWidth * state.zoom;
  return (
    <>      
      <Block factor={1.5} offset={0}>
        <HTML center>
          <div className="header-text">
            BECAUSE SLEEP IS OVERRATED
          </div>
        </HTML>
        <HTML>
          <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
					</svg>
        </HTML>
      </Block>
      {/* First section */}
      <Block factor={1.5} offset={1}>
        <Content left map={img1}>
          <HTML style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            The substance can take you to heaven but it can also take you to hell.
          </HTML>
        </Content>
      </Block>
      {/* Second section */}
      <Block factor={2.0} offset={2}>
        <Content map={img2}>
          <HTML style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "right" }} position={[mobile ? -contentMaxWidth / 2 : 0, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance.
          </HTML>
        </Content>
      </Block>
      {/* Stripe */}
      <Block factor={-1.0} offset={3}>
        <Stripe />
      </Block>
      {/* Last section */}
      <Block factor={1.5} offset={3.2}>
        <Content left map={img3}>
          <HTML style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }} position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            Education and enlightenment.
          </HTML>
        </Content>
      </Block>
      <Block factor={1.5} offset={4}>
        <HTML center>
          <div className="footer-text--first">
            dream
          </div>
          <div className="footer-text--second">
            BIG.
          </div>
        </HTML>
      </Block>
    </>
  )
}

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return (
    <mesh ref={ref} position={[0, 0, 200]} scale={[100, 100, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#000" transparent />
    </mesh>
  )
}

function Home() {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <div className="homeContainer">
      <Canvas className="canvas" orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<HTML center className="loading" children="Loading..." />}>
          <ambientLight />
          <pointLight position={[150, 150, 150]} intensity={0.55} />

          <Pages />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </div>
  )
}

export default Home;