import { useRef, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from 'next/image'
import PortfolioTeaser from "./components/portfolio-teaser";

import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {

  return (
    <>
      <Header />
        <main>

          <section className="page-title">
            <div className="wrapper">
              <h1>Portfolio</h1>
            </div>
          </section>

          <section className="block portfolio-roll">
            <div className="wrapper">

              <div className="row">

                <PortfolioTeaser
                  link="#"
                  src="/portfolio/schedule-it/cover.jpg"
                  alt="A screenshot of the home page that reads; Manage your claims, not your routes."
                  title="Schedule It"
                />

                <PortfolioTeaser
                  link="#"
                  src="/portfolio/level/cover.jpg"
                  alt="Level logo with tagline that reads; Find your center."
                  title="Level"
                />

                <PortfolioTeaser
                  link="#"
                  src="/portfolio/telegram/cover.jpg"
                  alt="An iPhone with a message to the left that reads; Tell a friend. Telegram."
                  title="Telegram"
                />

                <PortfolioTeaser
                  link="#"
                  src="/portfolio/wax/cover.jpg"
                  alt="A scene that shows all of the companies monsters scattered across a landscape and reads; Discover the monsters in healthcare marketing."
                  title="Wax"
                />

                <PortfolioTeaser
                  link="#"
                  src="/portfolio/goldhouse/cover.jpg"
                  alt="An image of a food dish that reads; Eat, Drink, Stay Gold"
                  title="Goldhouse"
                />

                {/* <PortfolioTeaser
                  link="#"
                  src="/portfolio/goldhouse/cover.jpg"
                  alt=""
                  title="Stellar Coin"
                /> */}

                {/* <PortfolioTeaser
                  link="#"
                  src="/portfolio/goldhouse/cover.jpg"
                  alt=""
                  title="Elegance Living"
                /> */}

                {/* <PortfolioTeaser
                  link="#"
                  src="/portfolio/goldhouse/cover.jpg"
                  alt=""
                  title="Bloom Collective"
                /> */}
                
                
              </div>

            </div>
          </section>

        </main>
      <Footer />
    </>
  )
}
