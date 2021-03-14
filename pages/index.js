import Head from 'next/head'
import TypeIt from "typeit-react"

export default function Home() {
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
      <div className="block hero style-1">
        <div className="wrapper">
          <div className="row">
            <div className="col">
              <h1 class="title"><div>We create</div> 
              
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
                
                <div>expereinces.</div>
        
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
