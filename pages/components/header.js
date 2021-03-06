import { useRef, useEffect, useState, useCallback } from "react";
import Head from 'next/head'
import Image from 'next/image'

// React Component
import Burger from '@animated-burgers/burger-slip' 
// don't forget the styles
import '@animated-burgers/burger-slip/dist/styles.css'

export default function Header() {
    const [isToggled, setIsToggled] = useState(false);
    const toggle = useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
        console.log(isToggled)
      );
    return (
       <>
        <Head>
            <script type="text/javascript" src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.7/lottie.min.js" integrity="sha512-HDCfX3BneBQMfloBfluMQe6yio+OfXnbKAbI0SnfcZ4YfZL670nc52Aue1bBhgXa+QdWsBdhMVR2hYROljf+Fg==" crossorigin="anonymous"></script>
        </Head>

        <header data-open={isToggled}>
            <div className="wrapper">
                <div className="row">
                    <a href="/" className="logo">
                        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.07072 5.01347C5.02468 5.01347 5.60503 4.51941 5.60503 3.76442V3.7371C5.60503 2.91359 5.02468 2.4744 4.05689 2.4744H2.79884V5.01347H4.07072ZM0.116943 0.237305H4.26444C6.71119 0.237305 8.287 1.48619 8.287 3.61355V3.64086C8.287 5.90551 6.5313 7.09969 4.12607 7.09969H2.79884V9.84474H0.116943V0.237305Z" fill="#FFFFFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6219 4.8487C17.5344 4.8487 18.0594 4.40951 18.0594 3.70971V3.68223C18.0594 2.92732 17.5067 2.543 16.6081 2.543H14.8524V4.8487H16.6219ZM12.1704 0.237305H16.7465C18.2254 0.237305 19.2485 0.621466 19.8981 1.28029C20.4654 1.82939 20.7552 2.57048 20.7552 3.51739V3.54494C20.7552 5.01347 19.9673 5.98793 18.7651 6.49581L21.0734 9.84474H17.9772L16.0277 6.93492H14.8524V9.84474H12.1704V0.237305Z" fill="#FFFFFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2148 5.06811V5.0408C32.2148 3.65462 31.2055 2.44678 29.7265 2.44678C28.2606 2.44678 27.279 3.62714 27.279 5.01332V5.0408C27.279 6.42706 28.2883 7.63474 29.7534 7.63474C31.2332 7.63474 32.2148 6.45445 32.2148 5.06811ZM24.5278 5.06811V5.0408C24.5278 2.28217 26.7678 0.0449219 29.7534 0.0449219C32.7398 0.0449219 34.9521 2.25462 34.9521 5.01332V5.0408C34.9521 7.7995 32.7121 10.0366 29.7265 10.0366C26.7402 10.0366 24.5278 7.82698 24.5278 5.06811Z" fill="#FFFFFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.116943 15.209H2.79884V22.4832H7.48526V24.8165H0.116943V15.209Z" fill="#FFFFFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9747 15.209H20.9155L15.8836 24.8165H12.9436L17.9747 15.209Z" fill="#FFFFFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8691 15.209H33.6106V17.5423H28.5511V19.1755H33.1272V21.3852H28.5511V24.8165H25.8691V15.209Z" fill="#FFFFFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.06775 30.1807H8.00775L2.97646 39.7881H0.036377L5.06775 30.1807Z" fill="#FFFFFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9839 35.0115V34.9842C11.9839 32.1842 14.1539 29.9883 17.0849 29.9883C19.062 29.9883 20.3334 30.8118 21.1905 31.9921L19.1727 33.543C18.6192 32.8566 17.9835 32.4175 17.0573 32.4175C15.7028 32.4175 14.7489 33.5568 14.7489 34.9567V34.9842C14.7489 36.4253 15.7028 37.5506 17.0573 37.5506C18.0666 37.5506 18.6607 37.0839 19.2419 36.3841L21.2597 37.8113C20.3473 39.0604 19.1174 39.9799 16.9742 39.9799C14.2092 39.9799 11.9839 37.88 11.9839 35.0115Z" fill="#FFFFFE"/>
                        </svg>
                    </a>
                    <Burger Component="button" type="button" onClick={toggle} isOpen={isToggled} />
                    <nav>
                    <ul>
                        <li><a href="portfolio">Portfolio</a></li>
                        {/* <li><a href="case-studies">Case Studies</a></li> */}
                        <li><a href="services">Services</a></li>
                        <li><a href="about-us">About us</a></li>
                        <li><a href="contact" className="btn">Contact</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </header>
       </>
    )
}