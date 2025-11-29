// src/pages/MyTrip.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaPlane, 
  FaTrashAlt, 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaClock,
  FaDollarSign,
  FaSuitcase,
  FaTicketAlt
} from "react-icons/fa";
import "../styles/MyTrip.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const MyTrip = () => {
  const [bookedTrips, setBookedTrips] = useState([]);
  const [isRemoving, setIsRemoving] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem("myTrips")) || [];
    setBookedTrips(trips);
  }, []);

  const handleBackToSearch = () => {
    navigate("/");
  };

  const handleRemoveTrip = (id) => {
    setIsRemoving(id);
    
    setTimeout(() => {
      const updatedTrips = bookedTrips.filter(trip => trip.id !== id);
      setBookedTrips(updatedTrips);
      localStorage.setItem("myTrips", JSON.stringify(updatedTrips));
      setIsRemoving(null);
    }, 400);
  };

  const handleViewDetails = (trip) => {
    // Navigate to trip details page or open modal
    navigate(`/trip-details/${trip.id}`, { state: { trip } });
  };

  // Empty State
  if (bookedTrips.length === 0) {
    return (
      <>
       
        <Navbar />
        <div className="mytrip-empty-state">
          <div className="empty-icon">
            <FaSuitcase />
          </div>
          <h2 className="empty-title">No Trips Yet</h2>
          <p className="empty-subtitle">
            Start planning your next adventure! Search and book amazing flights.
          </p>
          <button className="back-to-search-btn" onClick={handleBackToSearch}>
            <FaArrowLeft />
            <span>Back to Book</span>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
     <Preloader/>
      <Navbar />
      <div className="mytrip-container">
        {/* Header Section */}
        <div className="mytrip-header">
          <div className="header-content">
            <div className="header-left">
              <FaTicketAlt className="header-icon" />
              <div>
                <h1 className="page-title">My Trips</h1>
                <p className="page-subtitle">
                  {bookedTrips.length} {bookedTrips.length === 1 ? 'trip' : 'trips'} booked
                </p>
              </div>
            </div>
            <button className="back-btn-header" onClick={handleBackToSearch}>
              <FaArrowLeft />
              <span>Back to Book</span>
            </button>
          </div>
        </div>

        {/* Trips List */}
        <div className="trips-wrapper">
          {bookedTrips.map((trip) => (
            <div 
              key={trip.id} 
              className={`trip-card ${isRemoving === trip.id ? 'removing' : ''}`}
            >
              {/* Trip Image/Logo */}
              <div className="trip-image-section">
                <img 
                  src={trip.logo || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop"} 
                  alt={trip.airline} 
                  className="trip-image"
                />
                <div className="trip-overlay"></div>
                <div className="airline-badge">{trip.airline}</div>
              </div>

              {/* Trip Info */}
              <div className="trip-details">
                {/* Route Section */}
                <div className="trip-route">
                  <div className="route-city">
                    <span className="city-code">{trip.from.split('(')[1]?.replace(')', '') || trip.from}</span>
                    <span className="city-name">{trip.from.split('(')[0]?.trim() || trip.from}</span>
                  </div>
                  
                  <div className="route-arrow">
                    <FaPlane className="plane-icon-route" />
                    <div className="arrow-line"></div>
                  </div>
                  
                  <div className="route-city">
                    <span className="city-code">{trip.to.split('(')[1]?.replace(')', '') || trip.to}</span>
                    <span className="city-name">{trip.to.split('(')[0]?.trim() || trip.to}</span>
                  </div>
                </div>

                {/* Trip Details Grid */}
                <div className="trip-info-grid">
                  <div className="info-item">
                    <FaCalendarAlt className="info-icon" />
                    <div className="info-content">
                      <span className="info-label">Departure Date</span>
                      <span className="info-value">
                        {new Date(trip.departureDate).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="info-item">
                    <FaClock className="info-icon" />
                    <div className="info-content">
                      <span className="info-label">Flight Time</span>
                      <span className="info-value">
                        {trip.departureTime} - {trip.arrivalTime}
                      </span>
                    </div>
                  </div>

                  <div className="info-item">
                    <FaSuitcase className="info-icon" />
                    <div className="info-content">
                      <span className="info-label">Class</span>
                      <span className="info-value class-badge">
                        {trip.class.charAt(0).toUpperCase() + trip.class.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Section */}
              <div className="trip-actions">
                <div className="price-section-trip">
                  <span className="price-label">Total Price</span>
                  <div className="price-amount-trip">
                    <FaDollarSign className="dollar-icon-trip" />
                    <span className="price-value-trip">{trip.price}</span>
                  </div>
                </div>

                <div className="action-buttons">
                  <button 
                    className="view-details-btn"
                    onClick={() => handleViewDetails(trip)}
                  >
                    View Details
                  </button>
                  <button 
                    className="remove-trip-btn" 
                    onClick={() => handleRemoveTrip(trip.id)}
                  >
                    <FaTrashAlt />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MyTrip;