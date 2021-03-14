import { useRef, useEffect } from "react";
import Head from 'next/head'
import TypeIt from "typeit-react"
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    
    gsap.timeline({
      scrollTrigger: {
        trigger: ".slide-1",
        start: "center center",
        end: () => innerHeight * 0.5,
        scrub: true,
        pin: ".slide-1",
        anticipatePin: 1,
      },
    })
      .from(".slide-1", {
        scale: 1,
        ease: "none",
      })

      // .set(".slide-1", { autoAlpha: 1, scale: 1 })
      // .to(".slide-1", { duration: 0.1, autoAlpha: 1 }, 0.001)
      .to(".slide-1", {
        scale: 10,
        ease: "none",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".slide-2",
          start: "center center",
          end: () => innerHeight * 4,
          scrub: true,
          pin: ".slide-2",
          anticipatePin: 1,
        },
      })
        .from(".slide-2", {
          scale: 1,
          ease: "none",
        })
  
        // .set(".slide-2", { autoAlpha: 1, scale: 1 })
        // .to(".slide-2", { duration: 0.1, autoAlpha: 1 }, 0.001)
        .to(".slide-2", {
          scale: 10,
          ease: "none",
        });

  }, []);

  return (
    <main>
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
      <div className="block hero style-1 slide-1">
        <div className="wrapper">
          <div className="row">
            <div className="col">

              <h1 class="title">
                <Tween from={{ opacity: 0, scale: 0.5 }} to={{ opacity: 1, scale: 1 }} duration={4} ease="expo(1.7)">
                  <div>We create</div> 
                </Tween>
                
                <Tween from={{ opacity: 0, scale: 0.5 }} to={{ opacity: 1, scale: 1 }} duration={4} delay={0.3} ease="expo(1.7)">

                  <div class="slash">
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

      <div className="block hero style-2 content-right slide-2">
        <div className="shape">
          <img src="/shapes.jpg" alt="Placeholder"/>
        </div>
        <div className="wrapper">
          <div className="row">
            <div className="col">
              <div className="content">
                    <h2 class="title">Humans <span className="color-pop">interact</span> with your <span className="color-pop">brand.</span> Not robots.</h2>
                    <p>People are at the heart of everything we do. Our relationships and products all hinge on the people who plan, create, build, and use them.</p>
                    <p>That’s why we believe in human-centered design as a philosophy where data drives business decisions while art and science create engaging, interactive, and emotional experiences that connect people with brands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="block hero style-2 content-left">
        <div className="shape">
          <img src="/shapes.jpg" alt="Placeholder"/>
        </div>
        <div className="wrapper">
          <div className="row">
            <div className="col">
              <div className="content">
                  <h2 class="title">Undying curiosity. <span className="color-pop">Unwavering quality.</span></h2>
                  <p>We work tirelessly with our clients to ensure a great experience from idea to holy-moly-that’s-freaking-awesome!</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </main>
  )
}
