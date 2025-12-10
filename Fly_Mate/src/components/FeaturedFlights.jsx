
import React, { useState, useEffect } from "react";
import { FaPlane, FaClock, FaArrowRight } from "react-icons/fa";
import "../styles/FeaturedFlights.css";


export const SectionTitle = ({ title, subtitle, icon }) => {
  return (
    <div className="section-title-wrapper">
      {icon && <span className="section-icon">{icon}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

function FeaturedFlights() {
  const [currentFlights, setCurrentFlights] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  
  const allFlights = [
    {
      id: 1,
      from: "Cairo",
      fromCode: "CAI",
      to: "Dubai",
      toCode: "DXB",
      price: 450,
      duration: "3h 30m",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
      airline: "Emirates"
    },
    {
      id: 2,
      from: "Cairo",
      fromCode: "CAI",
      to: "London",
      toCode: "LHR",
      price: 680,
      duration: "5h 15m",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop",
      airline: "British Airways"
    },
    {
      id: 3,
      from: "Dubai",
      fromCode: "DXB",
      to: "Paris",
      toCode: "CDG",
      price: 520,
      duration: "6h 45m",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop",
      airline: "Air France"
    },
    {
      id: 4,
      from: "London",
      fromCode: "LHR",
      to: "New York",
      toCode: "JFK",
      price: 890,
      duration: "7h 30m",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
      airline: "American Airlines"
    },
    {
      id: 5,
      from: "Paris",
      fromCode: "CDG",
      to: "Tokyo",
      toCode: "NRT",
      price: 950,
      duration: "12h 20m",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
      airline: "Japan Airlines"
    },
    {
      id: 6,
      from: "Istanbul",
      fromCode: "IST",
      to: "Singapore",
      toCode: "SIN",
      price: 720,
      duration: "10h 15m",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop",
      airline: "Singapore Airlines"
    },
    {
      id: 7,
      from: "New York",
      fromCode: "JFK",
      to: "Sydney",
      toCode: "SYD",
      price: 1200,
      duration: "20h 45m",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=250&fit=crop",
      airline: "Qantas"
    },
    {
      id: 8,
      from: "Barcelona",
      fromCode: "BCN",
      to: "Rome",
      toCode: "FCO",
      price: 180,
      duration: "1h 45m",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=250&fit=crop",
      airline: "Vueling"
    },
    {
      id: 9,
      from: "Amsterdam",
      fromCode: "AMS",
      to: "Cairo",
      toCode: "CAI",
      price: 420,
      duration: "4h 50m",
      image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop",
      airline: "KLM"
    },
    {
      id: 10,
      from: "Dubai",
      fromCode: "DXB",
      to: "Bangkok",
      toCode: "BKK",
      price: 380,
      duration: "6h 10m",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=250&fit=crop",
      airline: "Thai Airways"
    },
    {
      id: 11,
      from: "Tokyo",
      fromCode: "NRT",
      to: "Hong Kong",
      toCode: "HKG",
      price: 350,
      duration: "4h 30m",
      image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400&h=250&fit=crop",
      airline: "Cathay Pacific"
    },
    {
      id: 12,
      from: "Istanbul",
      fromCode: "IST",
      to: "Barcelona",
      toCode: "BCN",
      price: 290,
      duration: "3h 40m",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=250&fit=crop",
      airline: "Turkish Airlines"
    }
  ];

 
  const getRandomFlights = () => {
    const shuffled = [...allFlights].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

 
  useEffect(() => {
    setCurrentFlights(getRandomFlights());
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentFlights(getRandomFlights());
        setIsAnimating(false);
      }, 500);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // const handleBookNow = (flight) => {
  //   console.log("Booking flight:", flight);
    
    
  // };



  const handleBookNow = (flight) => {
  const savedTrips = JSON.parse(localStorage.getItem("myTrips")) || [];

  const flightToSave = {
    id: flight.id,
    airline: flight.airline,
    from: `${flight.from} (${flight.fromCode})`,
    to: `${flight.to} (${flight.toCode})`,
    departureDate: flight.departureDate || new Date().toISOString().split("T")[0],
    departureTime: flight.departureTime || "08:00",
    arrivalTime: flight.arrivalTime || "12:00",
    duration: flight.duration,
    price: flight.price,
    class: flight.class || "economy",
    availableSeats: flight.availableSeats || 20,
    logo: flight.image || flight.logo
  };

  if (!savedTrips.find(t => t.id === flight.id)) {
    savedTrips.push(flightToSave);
    localStorage.setItem("myTrips", JSON.stringify(savedTrips));
  }
};
 

  return (
    <section className="featured-flights-section">
      <SectionTitle 
        title="Featured Flights"
        subtitle="Discover our best deals and popular destinations"
        icon={<FaPlane />}
      />

      <div className={`flights-grid-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {currentFlights.map((flight) => (
          <div key={flight.id} className="flight-box">
            <div className="flight-box-image">
              <img src={flight.image} alt={flight.to} />
              <div className="flight-price-tag">
                <span className="price-currency">$</span>
                <span className="price-value">{flight.price}</span>
              </div>
              <div className="flight-airline-tag">{flight.airline}</div>
            </div>
            
            <div className="flight-box-content">
              <div className="flight-route-box">
                <div className="route-from">
                  <span className="route-code">{flight.fromCode}</span>
                  <span className="route-city">{flight.from}</span>
                </div>
                
                <div className="route-arrow">
                  <FaPlane className="plane-icon" />
                </div>
                
                <div className="route-to">
                  <span className="route-code">{flight.toCode}</span>
                  <span className="route-city">{flight.to}</span>
                </div>
              </div>

              <div className="flight-duration-box">
                <FaClock className="duration-icon" />
                <span>{flight.duration}</span>
              </div>

              <button 
                onClick={() => handleBookNow(flight)}
                className="book-now-box-btn"
              >
                Book Now
                <FaArrowRight className="btn-arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedFlights;