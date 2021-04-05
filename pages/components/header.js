import { useRef, useEffect } from "react";
import Head from 'next/head'

export default function Header() {
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
       </>
    )
}