import { useRef, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";

import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function aboutUs() {


  useEffect(() => {

    function LottieScrollTrigger(vars) {
      let playhead = {frame: 0},
        target = gsap.utils.toArray(vars.target)[0],
        speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
        st = {trigger: target, pin: false, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
        animation = lottie.loadAnimation({
          container: target,
          renderer: vars.renderer || "svg",
          loop: false,
          autoplay: false,
          path: vars.path
        });
      for (let p in vars) { // let users override the ScrollTrigger defaults
        st[p] = vars[p];
      }
      animation.addEventListener("DOMLoaded", function() {
        gsap.to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
          scrollTrigger: st
        });
      });
    }

    LottieScrollTrigger({
      target: ".shape-1",
      path: "https://assets9.lottiefiles.com/private_files/lf30_hu6y5yd2.json",
      speed: "medium",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      start: "top top+=400px",
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

  }, []);

  return (
    <>
      <Header />
        <main>
          <section className="page-title">
            <div className="wrapper">
              <h1>About us</h1>
            </div>
          </section>

          <div className="block hero style-3">
            <div className="wrapper">
              <div className="row">
                <div className="col content">
                  <h2 class="title">We are a creative agency focused on expressing brands through immersive storytelling experiences.</h2>
                  <p>People are at the heart of everything we do. Our relationships and products all hinge on the people who plan, create, build, and use them.</p>
                  <p>That’s why we believe in creative first philosophy where data drives business decisions while art and science create engaging, interactive, and emotional experiences that connect people with brands.</p>
                </div>
                <div className="col animation">
                  <div className="shape shape-1"></div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </main>
        
      <Footer />
    </>
  )
}
