import React, { Suspense, useRef, useState } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { Environment, Loader } from "@react-three/drei";

import { BodyCopy, Headline, Subtitle } from "./Text";
import { Image } from "./Image";
import { ImageCube } from "./ImageCube";
import { WebGLBackground } from "./WebGLBackground";
import { Lens } from "./Lens";
import CodropsFrame from "./CodropsFrame";
import EffectsToggle from "./EffectsToggle";

import "@14islands/r3f-scroll-rig/css";


export default function App() {
  const eventSource = useRef();
  const [enabled, setEnabled] = useState(true);

  return (
    <div ref={eventSource}>
      <CodropsFrame />
      <GlobalCanvas
        debug={false}
        scaleMultiplier={0.01}
        eventSource={eventSource}
        eventPrefix="client"
        flat 
        camera={{ fov: 14 }}
        style={{ pointerEvents: "none", zIndex: -1 }}
      >
        {(globalChildren) => (
          <Lens>
            <WebGLBackground />
            <Suspense fallback="">
              {
                
              }
              <Environment files="env/empty_warehouse_01_1k.hdr" />
              {globalChildren}
            </Suspense>
          </Lens>
        )}
      </GlobalCanvas>
      <SmoothScrollbar
        enabled={enabled}
        config={{ syncTouch: true }} 
      />
      <article>
        <EffectsToggle setEnabled={setEnabled} enabled={enabled} />
        <header className="container">
          <div className="headerLayout">
            <h2>
              <Headline wobble>
                THE ART OF {enabled ? "LESS" : "LESS"}
              </Headline>
            </h2>
            <BodyCopy as="p" className="subline">
              Minimalism, more than just an aesthetic is a philosophy 
              that can transform the way you approach anything.
             
            </BodyCopy>
          </div>
        </header>
        <section className="container">
          <Image
            src="images/maxim-berg-1_U2RcHnSjc-unsplash.jpg"
            className="ImageLandscape"
          />
        </section>
        <section className="container">
          <h3>
            <Subtitle>Stripping away the unnecessary, </Subtitle>
            <em>
              <Subtitle>
              we create room for what truly matters.
              </Subtitle>
            </em>
          </h3>
          <p>
            <BodyCopy>
              This was made using WebGl Lens Refraction.
              True Focus was made on making the website as minimal and sleek using react-three-fiber and threejs inspired by 14islands.
            </BodyCopy>
          </p>
        </section>
        <section className="ParallaxContainer">
          <Image
            src="images/maxim-berg-qsDfqZyTCAE-unsplash-crop.jpg"
            className="aspect-9_13"
            parallaxSpeed={1.08}
          />
          <Image
            src="images/maxim-berg-ANuuRuCRRAc-unsplash.jpg"
            className="aspect-16_11"
            parallaxSpeed={0.92}
          />
        </section>
        <section className="container">
          <h4>
            <BodyCopy>
              Thanks to Threejs we can also render 3D geometry or models. The
              following image is replaced by a box. Try scrolling hard to make
              it wiggle. 
            </BodyCopy>
          </h4>
        </section>
        <section>
          <ImageCube
            src="images/maxim-berg-TcE45yIzJA0-unsplash.jpg"
            className="JellyPlaceholder"
          />
        </section>
        <section className="container">
          <h3>
            <Subtitle> Minimalism has the ability to liberate us from the complexities and stresses of modern life. </Subtitle>
            <em>
              <Subtitle>
              Rediscover the true essence of what matters most.
              </Subtitle>
            </em>
          </h3>
          <p>
            <a href="https://github.com/14islands/r3f-scroll-rig">
              <BodyCopy>
                Kindly visit my portfolio and give a heart to other works too!
              </BodyCopy>
            </a>
          </p>
        </section>
        <footer>
          <CodropsFrame />
        </footer>
      </article>

      <Loader
        containerStyles={{
          background: "transparent",
          top: "auto",
          bottom: 0,
          height: "5px",
        }}
        innerStyles={{ background: "white", width: "100vw", height: "5px" }}
        barStyles={{ background: "#6e6bcd", height: "100%" }}
      />
    </div>
  );
}
