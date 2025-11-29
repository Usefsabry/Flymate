import { useState, useEffect } from "react";
import "../styles/home.css";

const images = [
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    text: "Discover Your Next Adventure",
  },
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    text: "Fly To Beautiful Destinations",
  },
  {
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    text: "Experience Luxury Travel",
  },
  {
    url: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    text: "Where Every Journey Begins",
  }
];

function Hero (){
 const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="hero">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img.url})` }}
        >
          <div className="overlay">
            <h1>{img.text}</h1>
            <button
             className="book-btn-hero" 
            onClick={() =>
            document.getElementById("booking_id")?.scrollIntoView({ behavior: "smooth" })
          }
            >Book Now</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );

}

export default Hero;



