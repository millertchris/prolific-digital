import { useRef, useEffect } from "react";
import Head from 'next/head'
import TypeIt from "typeit-react"
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

export default function Home() {

  useEffect(() => {

    function LottieScrollTrigger(vars) {
      let playhead = {frame: 0},
        target = gsap.utils.toArray(vars.target)[0],
        speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
        st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
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
      target: "#slide-2 .shape",
      path: "https://assets10.lottiefiles.com/private_files/lf30_ppr0ovoc.json",
      speed: "slow",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

    LottieScrollTrigger({
      target: "#slide-4 .shape",
      path: "https://assets10.lottiefiles.com/private_files/lf30_vkkbcx4r.json",
      speed: "slow",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      // start: "top top",
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

    // LottieScrollTrigger({
    //   target: ".slide-4 .shape",
    //   path: "https://assets10.lottiefiles.com/private_files/lf30_kruepo7c.json",
    //   speed: "medium",
    //   scrub: 2, // seconds it takes for the playhead to "catch up"
    //   // start: "top top",
    //   // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    // });
   
    var tlone = gsap.timeline({
      scrollTrigger: {
        trigger: "#slide-1",
        start: "top top",
        end: () => "bottom top",
        // end: () => innerHeight * 1,
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    })

    var tltwo = gsap.timeline({
      scrollTrigger: {
        trigger: "#slide-2",
        start: "center center",
        end: () => "+=2000",
        scrub: true,
        pin: true,
        markers: true,
      },
    })

    var tlthree = gsap.timeline({
      scrollTrigger: {
        trigger: "#slide-3",
        start: "center center",
        end: () => "+=3000",
        // end: () => innerHeight * 2,
        scrub: true,
        pin: true,
        markers: true,
      },
    })
    
    var tlfour = gsap.timeline({
      scrollTrigger: {
        trigger: "#slide-4",
        start: "center center",
        // end: () => innerHeight * 1.5,
        scrub: true,
        pin: true,
        markers: true,
      },
    })

    tlone.to("#slide-1", { scale: 0, autoAlpha: 0, ease: "power2" })

    tltwo.fromTo("#slide-2 .shape", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
    tltwo.fromTo("#slide-2 .content", { autoAlpha: 0 }, { y: "0", autoAlpha: 1, ease: "power2" })
    tltwo.to("#slide-2 .shape", { autoAlpha: 0, ease: "power2" })
    tltwo.to("#slide-2 .content", { autoAlpha: 0, ease: "power2" })

    tlthree.fromTo("#slide-3 #item-1", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #item-2", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #item-3", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #word-1", { autoAlpha: 0}, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #word-2", { autoAlpha: 0}, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #word-3", { autoAlpha: 0}, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #word-4", { autoAlpha: 0}, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #word-5", { autoAlpha: 0}, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 #word-6", { autoAlpha: 0}, { autoAlpha: 1, ease: "power2" })
    tlthree.fromTo("#slide-3 .btn", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
    
    tlthree.to("#slide-3 .row", { autoAlpha: 0, ease: "power2" })

    tlfour.fromTo("#slide-4 .shape", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
    tlfour.fromTo("#slide-4 .content", { x: "100%", autoAlpha: 0 }, { x: "0", autoAlpha: 1, ease: "power2" })
    // tlthree.to("#slide-4 .row", { autoAlpha: 0, ease: "power2" })
    // tlfour.fromTo("#slide-4 .shape", { autoAlpha: 1 }, { autoAlpha: 0, ease: "power2" })
    // tlfour.fromTo("#slide-4 .content", { autoAlpha: 1 }, { autoAlpha: 0, ease: "power2" })

    // new stuff
    // Need to add strokes to all of the shapes, may need path.
    // gsap.fromTo("polygon", {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1});

  }, []);

  return (
    <>
      <Head>
        <script type="text/javascript" src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.7/lottie.min.js" integrity="sha512-HDCfX3BneBQMfloBfluMQe6yio+OfXnbKAbI0SnfcZ4YfZL670nc52Aue1bBhgXa+QdWsBdhMVR2hYROljf+Fg==" crossorigin="anonymous"></script>
      </Head>
      
      <header>
          <div className="wrapper">
            <div className="row">
              <a href="/"><img src="/logo.svg" alt="Prolific Digital"/></a>
              <nav>
                <ul>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#" className="btn">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      <main>
        <div id="slide-1" className="block hero style-1 slide">
          <div className="wrapper">
            <div className="row">
              <div className="col">

                <h1 className="title">
                  <Tween from={{ opacity: 0, scale: 0.5 }} to={{ opacity: 1, scale: 1 }} duration={4} ease="expo(1.7)">
                    <div>We create</div> 
                  </Tween>
                  
                  <Tween from={{ opacity: 0, scale: 0.5 }} to={{ opacity: 1, scale: 1 }} duration={4} delay={0.3} ease="expo(1.7)">

                    <div className="slash">
                      <TypeIt
                        getBeforeInit={instance => {
                          instance
                            .type("interactive")
                            .pause(600)
                            .delete(11)
                            .type("bespoke")
                            .pause(600)
                            .delete(7)
                            .type("accessible")
                            .pause(600)
                            .delete(11)
                            .type("reactive")
                            .pause(600)
                            .delete(8)
                            .type("engaging")
                            .pause(600)
                            .delete(8)
                            .type("intentional")
                            .pause(600)
                            .delete(11)
                            .type("fun")
                            .pause(600)
                            .delete(3)
                            .type("lovely")
                            .pause(600)
                            .delete(6)
                            .pause(600)
                            .type("interactive")
                          // Remember to return it!
                          return instance;
                        }}
                        options={{
                          cursor: false,
                          waitUntilVisible: true,
                          loop: false
                        }}>
                      </TypeIt>
                    </div> 

                  </Tween>

                  <Tween from={{ opacity: 0, scale: 0.5 }} to={{ opacity: 1, scale: 1 }} duration={4} delay={0.6} ease="expo(1.7)">
                  
                    <div>experiences.</div>

                  </Tween>
          
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div id="slide-2" className="block hero style-2 content-right slide">
          <div className="shape"></div>
          <div className="wrapper">
            <div className="row">
              <div className="col">
                <div className="content">
                    <h2 className="title">Humans <span className="color-pop">interact</span> with your <span className="color-pop">brand.</span> Not robots.</h2>
                    <p>People are at the heart of everything we do. Our relationships and products all hinge on the people who plan, create, build, and use them.</p>
                    <p>That’s why we believe in human-centered design as a philosophy where data drives business decisions while art and science create engaging, interactive, and emotional experiences that connect people with brands.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="slide-3" className="block carousel style-1 slide">
          <div className="wrapper">
            <div className="row">
              <div className="col">
                <div className="content">
                    <h2 className="title"><span id="word-1">We</span> <span id="word-2">rather</span> <span id="word-3">show</span> <span id="word-4">than</span> <span id="word-5">tell</span><span id="word-6">.</span></h2>
                </div>
                <div className="carousel">
                  <div id="item-1" className="item">
                    <a href="#">
                      <div className="image">
                        <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                      </div>
                      <div className="details">
                        <h2 className="title">Project Title</h2>
                        <div className="type">Website</div>
                      </div>
                    </a>
                  </div>
                  <div id="item-2" className="item">
                    <a href="#">
                      <div className="image">
                        <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                      </div>
                      <div className="details">
                        <h2 className="title">Project Title</h2>
                        <div className="type">Website</div>
                      </div>
                    </a>
                  </div>
                  <div id="item-3" className="item">
                    <a href="#">
                      <div className="image">
                        <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                      </div>
                      <div className="details">
                        <h2 className="title">Project Title</h2>
                        <div className="type">Website</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="btn">View portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="slide-4" className="block hero style-2 content-left slide">
          <div className="shape"></div>
          <div className="wrapper">
            <div className="row">
              <div className="col">
                <div className="content">
                    <h2 className="title">Undying curiosity. <span className="color-pop">Unwavering quality.</span></h2>
                    <p>We work tirelessly with our clients to ensure a great experience from idea to holy-moly-that’s-freaking-awesome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="slide-5" className="block contact slide">
          <div className="wrapper">
            <div className="row">
              <div className="col">
                <div className="content">
                    <h2 className="title">You have a story to tell. <span className="color-pop">Let's share it.</span></h2>
                    <form action="#">
                      <div>
                        <input type="text" name="name" />
                      </div>
                      <div>
                        <input type="text" name="email" />
                      </div>
                      <div>
                        <textarea name="message" id="" cols="30" rows="2"></textarea>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
