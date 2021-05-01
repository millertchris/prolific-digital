import { useRef, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function caseStudies() {

  return (
    <>
      <Header />
        <main>
          <section className="block hero">
            <div className="wrapper">
              <div className="row">
                <div className="col">
                  <h1>Case Studies</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}
