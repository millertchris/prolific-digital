import { useRef, useEffect } from "react";
import Image from 'next/image'

export default function PortfolioTeaser(prop) {

  return (
    <>
        <div className="col">
            <a href={prop.link} className="item">
            <div className="image">
                <Image
                src={prop.src}
                alt={prop.alt}
                layout="fill"
                />
            </div>
            <div className="details">
                <h2 className="title">{prop.title}</h2>
            </div>
            </a>
        </div>
    </>
  )
}
