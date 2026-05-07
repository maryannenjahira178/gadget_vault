import React from 'react'
import { useState, useEffect } from "react";
import "../App.css";

const Carousel = () => {
    const images=[
        "/images/blackbanner.png",
        "/images/greybanner.png",
        "/images/creambanner.png"
    ]

    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  return ( 
     <div className="w-100" style={{ height: "500px" }}>
   <img
  src={images[index]}
  alt="carousel"
  style={{
    width: "100%",
    height: "400px",
    objectFit: "fit"
  }}
/>

  </div>                  
  )
}

export default Carousel
