import { useRef, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";
import Image from 'next/image'

import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Service() {

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
      path: "https://assets8.lottiefiles.com/private_files/lf30_duaearku.json",
      speed: "medium",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      start: "top top",
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

    LottieScrollTrigger({
      target: ".shape-2",
      path: "https://assets8.lottiefiles.com/private_files/lf30_jcjgzmsk.json",
      speed: "medium",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      start: "top center+=300px",
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

    LottieScrollTrigger({
      target: ".shape-3",
      path: "https://assets9.lottiefiles.com/private_files/lf30_baz6dh45.json",
      speed: "medium",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      start: "bottom bottom",
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

    LottieScrollTrigger({
      target: ".shape-4",
      path: "https://assets4.lottiefiles.com/private_files/lf30_hbhs6dlq.json",
      speed: "medium",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      start: "top bottom",
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

  }, []);

  return (

    <>
      <Header />
        <main>

          <section className="page-title">
            <div className="wrapper">
              <h1>Services</h1>
            </div>
          </section>

          <section className="block service-list">
            <div className="wrapper">

            <div className="row">
                <div className="col content">
                    <div className="shape shape-2"></div>
                    <div className="details">
                      <h2 className="title">Discovery</h2>
                      <p>Planning is the most crucial part of every project — gathering all of the business goals and project requirements from each stakeholder. It is a shared and collaborative experience to ensure that we're all aligned.</p>
                    </div>
                </div>

                <div className="col list">
                  <ul>
                    <li>Goals and Requirements</li>
                    <li>Strategy</li>
                    <li>User Personas</li>
                    <li>User Journeys</li>
                    <li>Sitemap</li>
                    <li>Wireframing</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col content">
                    <div className="shape shape-3"></div>
                    <div className="details">
                      <h2 className="title">Design</h2>
                      <p>We lead with creative thinking around what we've discovered and look for ways to tell the brand's story through immersive and interactive experiences.</p>
                    </div>
                </div>

                <div className="col list">
                  <ul>
                    <li>Ideation and concept</li>
                    <li>Brand identity</li>
                    <li>UI/UX design</li>
                    <li>Motion Graphics</li>
                    <li>3D Modeling and Rigging</li>
                    <li>Responsive design</li>
                    <li>Design patterns</li>
                    <li>Styleguides</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col content">
                    <div className="shape shape-4"></div>
                    <div className="details">
                      <h2 className="title">Develop</h2>
                      <p>Bringing the ideas to life — we use various web technologies to deliver a polished and refined experience for every individual who connects with your brand in a digital space.</p>
                    </div>
                </div>

                <div className="col list">
                  <ul>
                    <li>Javascript, PHP, SCSS, HTML</li>
                    <li>React and Vue</li>
                    <li>Next.js and Gatsby.js</li>
                    <li>GreenSock and Lottie.js</li>
                    <li>Accessibility</li>
                    <li>Responsive</li>
                    <li>Wordpress and Strapi</li>
                    <li>Custom Themes and Plugins</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <ContactForm />

        </main>
      <Footer />
    </>
  )
}
