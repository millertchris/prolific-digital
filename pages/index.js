import { useRef, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import TypeIt from "typeit-react"
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

import Flickity from 'react-flickity-component';

const flickityOptions = {
    wrapAround: true,
    accessibility: true,
    cellAlign: 'center'
}

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

export default function Home() {

  useEffect(() => {

    // var flkty = new Flickity( '.carousel', {
    //     // options...
    // });

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
      target: "#slide-2 .shape",
      path: "https://assets10.lottiefiles.com/private_files/lf30_ppr0ovoc.json",
      speed: "medium",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });

    LottieScrollTrigger({
      target: "#slide-4 .shape",
      path: "https://assets10.lottiefiles.com/private_files/lf30_vkkbcx4r.json",
      speed: "medium",
      scrub: 2, // seconds it takes for the playhead to "catch up"
      // start: "top top",
      // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
    });
   
    var tlone = gsap.timeline({
      scrollTrigger: {
        trigger: "#slide-1",
        start: "top top",
        end: () => "bottom top",
        // end: () => innerHeight * 1,
        scrub: true,
        pin: true,
        pinSpacing: false,
        // markers: true,
        // snap: {
        //   snapTo: 1, // snap to the closest label in the timeline
        //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
      },
    })

    var tltwo = gsap.timeline({
      scrollTrigger: {
        trigger: "#slide-2",
        start: "center center",
        end: () => "+=2000",
        scrub: true,
        pin: true,
        // pinSpacing: false,
        // markers: true,
        // snap: 1 / (4 - 1),
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
        // markers: true,
        // snap: 1 / (10 - 1),
      },
    })
    
    var tlfour = gsap.timeline({
      scrollTrigger: {
        trigger: "#slide-4",
        start: "center center",
        // end: () => innerHeight * 1.5,
        scrub: true,
        pin: true,
        // markers: true,
        // snap: 1 / (2 - 1),
      },
    })

    tlone.to("#slide-1", { scale: 0, autoAlpha: 0, ease: "power2" })

    tltwo.fromTo("#slide-2 .shape", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
    tltwo.fromTo("#slide-2 .content", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power2" })
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
      <Header />
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
            <div className="wrapper">
              <div className="row">
                <div className="col">
                  <div className="shape"></div>
                </div>
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

                  <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={true} // default false
                    reloadOnUpdate // default false
                    static // default false
                  >
                      <a href="#" className="item">
                        <div className="image">
                          <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                        </div>
                        <div className="details">
                          <h2 className="title">Project Title</h2>
                          <div className="type">Website</div>
                        </div>
                      </a>
                      <a href="#" className="item">
                        <div className="image">
                          <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                        </div>
                        <div className="details">
                          <h2 className="title">Project Title</h2>
                          <div className="type">Website</div>
                        </div>
                      </a>
                      <a href="#" className="item">
                        <div className="image">
                          <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                        </div>
                        <div className="details">
                          <h2 className="title">Project Title</h2>
                          <div className="type">Website</div>
                        </div>
                      </a>
                      <a href="#" className="item">
                        <div className="image">
                          <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                        </div>
                        <div className="details">
                          <h2 className="title">Project Title</h2>
                          <div className="type">Website</div>
                        </div>
                      </a>
                      <a href="#" className="item">
                        <div className="image">
                          <img src="https://source.unsplash.com/random" alt="Placeholder image"/>
                        </div>
                        <div className="details">
                          <h2 className="title">Project Title</h2>
                          <div className="type">Website</div>
                        </div>
                      </a>
                  </Flickity>

                  
                  <div className="content">
                    <a href="#" className="btn">View portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="slide-4" className="block hero style-2 content-left slide">
            <div className="wrapper">
              <div className="row">
                <div className="col">
                  <div className="content">
                      <h2 className="title">Undying curiosity. <span className="color-pop">Unwavering quality.</span></h2>
                      <p>We work tirelessly with our clients to ensure a great experience from idea to holy-moly-that’s-freaking-awesome!</p>
                  </div>
                </div>
                <div className="col">
                  <div className="shape"></div>
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
                        <fieldset>
                          <input type="text" name="name" id="name" placeholder="What is your name?" />
                          <label htmlFor="name">Name</label>
                        </fieldset>
                        <fieldset>
                          <input type="text" name="email" id="email" placeholder="What is your email?" />
                          <label htmlFor="email">Email</label>
                        </fieldset>
                        <fieldset>
                          <textarea name="message" id="message" cols="30" rows="5" placeholder="What's on your mind?"></textarea>
                          <label htmlFor="message">Message</label>
                        </fieldset>
                        <button type="submit">Submit</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      <Footer />
    </>
  )
}
