// src/components/FlightSearch.jsx
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  FaPlane, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUsers, 
  FaSearch, 
  FaClock, 
  FaDollarSign,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";
import "../styles/FlightSearch.css";

function FlightSearch() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelClass, setTravelClass] = useState("economy");
  const [passengers, setPassengers] = useState(1);

  const [airports, setAirports] = useState([]);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // نتائج البحث عن الرحلات
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // جلب البيانات من Fake API
    const fetchAirports = async () => {
      try {
        const fallbackData = [
          {
            id: 1,
            city: "Cairo",
            code: "CAI",
            country: "Egypt",
            airport: "Cairo International Airport",
            image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&h=250&fit=crop"
          },
          {
            id: 2,
            city: "Dubai",
            code: "DXB",
            country: "UAE",
            airport: "Dubai International Airport",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop"
          },
          {
            id: 3,
            city: "London",
            code: "LHR",
            country: "UK",
            airport: "Heathrow Airport",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop"
          },
          {
            id: 4,
            city: "Paris",
            code: "CDG",
            country: "France",
            airport: "Charles de Gaulle Airport",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop"
          },
          {
            id: 5,
            city: "New York",
            code: "JFK",
            country: "USA",
            airport: "John F. Kennedy Airport",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop"
          },
          {
            id: 6,
            city: "Tokyo",
            code: "NRT",
            country: "Japan",
            airport: "Narita International Airport",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop"
          },
          {
            id: 7,
            city: "Istanbul",
            code: "IST",
            country: "Turkey",
            airport: "Istanbul Airport",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=250&fit=crop"
          },
          {
            id: 8,
            city: "Singapore",
            code: "SIN",
            country: "Singapore",
            airport: "Changi Airport",
            image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop"
          },
          {
            id: 9,
            city: "Sydney",
            code: "SYD",
            country: "Australia",
            airport: "Sydney Airport",
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=250&fit=crop"
          },
          {
            id: 10,
            city: "Barcelona",
            code: "BCN",
            country: "Spain",
            airport: "Barcelona Airport",
            image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=250&fit=crop"
          },
          {
            id: 11,
            city: "Rome",
            code: "FCO",
            country: "Italy",
            airport: "Leonardo da Vinci Airport",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=250&fit=crop"
          },
          {
            id: 12,
            city: "Amsterdam",
            code: "AMS",
            country: "Netherlands",
            airport: "Schiphol Airport",
            image: "https://images.unsplash.com/photo-1584003564911-a7e33beb81e2?w=400&h=250&fit=crop"
          }
        ];

        setAirports(fallbackData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching airports", error);
        setLoading(false);
      }
    };

    fetchAirports();
  }, []);

  const handleFromChange = (value) => {
    setFrom(value);
    if (value.length > 0) {
      const suggestions = airports
        .filter((airport) =>
          airport.city.toLowerCase().includes(value.toLowerCase()) ||
          airport.code.toLowerCase().includes(value.toLowerCase()) ||
          airport.country.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 4);
      setFromSuggestions(suggestions);
    } else {
      setFromSuggestions([]);
    }
  };

  const handleToChange = (value) => {
    setTo(value);
    if (value.length > 0) {
      const suggestions = airports
        .filter((airport) =>
          airport.city.toLowerCase().includes(value.toLowerCase()) ||
          airport.code.toLowerCase().includes(value.toLowerCase()) ||
          airport.country.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 4);
      setToSuggestions(suggestions);
    } else {
      setToSuggestions([]);
    }
  };

  const handleSelectAirport = (airport, type) => {
    if (type === "from") {
      setFrom(`${airport.city} (${airport.code})`);
      setFromSuggestions([]);
    } else {
      setTo(`${airport.city} (${airport.code})`);
      setToSuggestions([]);
    }
  };

  // دالة البحث عن الرحلات (بدون alerts)
  const handleSearch = () => {
    // فقط التحقق من From و To
    if (!from || !to) {
      return; // بدون alert
    }

    // إنشاء رحلات وهمية بناءً على البحث
    const mockFlights = generateMockFlights();
    setSearchResults(mockFlights);
    setShowResults(true);

    // Scroll to results
    setTimeout(() => {
      document.querySelector('.flight-results-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  // إنشاء رحلات وهمية مع تواريخ متعددة
  const generateMockFlights = () => {
    const airlines = [
      { name: "Emirates", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=100&fit=crop" },
      { name: "Qatar Airways", logo: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=100&h=100&fit=crop" },
      { name: "Turkish Airlines", logo: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=100&h=100&fit=crop" },
      { name: "Lufthansa", logo: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=100&h=100&fit=crop" },
      { name: "Air France", logo: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=100&h=100&fit=crop" },
      { name: "Lufthansa", logo: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=100&h=100&fit=crop" }
 
    ];

    const times = ["06:00", "09:30", "13:45", "17:20", "21:15", "08:45"];
    const durations = ["3h 25m", "4h 10m", "5h 30m", "6h 15m", "4h 45m", "5h 00m"];
    const prices = [450, 520, 680, 750, 890, 620];

    // توليد تواريخ مختلفة (اليوم + الأيام القادمة)
    const generateDates = () => {
      const dates = [];
      const today = new Date();
      for (let i = 0; i < 6; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
      }
      return dates;
    };

    const dates = generateDates();

    return airlines.map((airline, index) => ({
      id: index + 1,
      airline: airline.name,
      logo: airline.logo,
      from: from,
      to: to,
      departureDate: dates[index],
      departureTime: times[index],
      arrivalTime: times[(index + 2) % times.length],
      duration: durations[index],
      price: prices[index],
      stops: index % 2 === 0 ? "Direct" : "1 Stop",
      class: travelClass,
      availableSeats: Math.floor(Math.random() * 50) + 10
    }));
  };

  // دالة حجز الرحلة (بدون alert)******************************************************************
  // const handleBookFlight = (flight) => {
  //   console.log("Flight Booked:", flight);
    
  // };

 

const handleBookFlight = (flight) => {
  const savedTrips = JSON.parse(localStorage.getItem("myTrips")) || [];
 
  if (!savedTrips.find(t => t.id === flight.id)) {
    savedTrips.push(flight);
    localStorage.setItem("myTrips", JSON.stringify(savedTrips));
  }
  // navigate("/mytrip"); // navigate لصفحة MyTrip
};




  // دالة إغلاق النتائج ومسح البيانات
  const handleCloseResults = () => {
    setShowResults(false);
    setSearchResults([]);
    setFrom("");
    setTo("");
    setDepartureDate("");
    setReturnDate("");
    setPassengers(1);
    setTravelClass("economy");
  };

  if (loading) {
    return (
      <div className="flight-search-container">
        <div className="loading-spinner">
          <FaPlane size={40} className="spinning-icon" />
          <p>Loading airports...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flight-search-container" id="booking_id">
        <h2 className="flight-search-title" >
          <FaPlane className="title-icon" />
          Book Your Trip
        </h2>
        
        <div className="flight-search-box">
          {/* Trip Type */}
          <div className="trip-type-wrapper">
            <label className="radio-label">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={() => setTripType("oneway")}
                className="radio-input"
              />
              <span className="radio-text">One Way</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                checked={tripType === "roundtrip"}
                onChange={() => setTripType("roundtrip")}
                className="radio-input"
              />
              <span className="radio-text">Round Trip</span>
            </label>
          </div>

          {/* From / To Row */}
          <div className="input-row">
            {/* From Autocomplete */}
            <div className="autocomplete-wrapper">
              <div className="input-group">
                <FaPlane className="input-icon" />
                <input
                  type="text"
                  placeholder="From (City or Code)"
                  value={from}
                  onChange={(e) => handleFromChange(e.target.value)}
                  className="flight-input"
                />
              </div>
              
              {fromSuggestions.length > 0 && (
                <div className="suggestions-dropdown">
                  {fromSuggestions.map((airport) => (
                    <div key={airport.id} className="suggestion-item">
                      <img
                        src={airport.image}
                        alt={airport.city}
                        className="suggestion-image"
                      />
                      <div className="suggestion-info">
                        <div className="suggestion-city">
                          {airport.city} ({airport.code})
                        </div>
                        <div className="suggestion-country">
                          {airport.country}
                        </div>
                      </div>
                      <button
                        onClick={() => handleSelectAirport(airport, "from")}
                        className="select-btn"
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* To Autocomplete */}
            <div className="autocomplete-wrapper">
              <div className="input-group">
                <FaMapMarkerAlt className="input-icon" />
                <input
                  type="text"
                  placeholder="To (City or Code)"
                  value={to}
                  onChange={(e) => handleToChange(e.target.value)}
                  className="flight-input"
                />
              </div>
              
              {toSuggestions.length > 0 && (
                <div className="suggestions-dropdown">
                  {toSuggestions.map((airport) => (
                    <div key={airport.id} className="suggestion-item">
                      <img
                        src={airport.image}
                        alt={airport.city}
                        className="suggestion-image"
                      />
                      <div className="suggestion-info">
                        <div className="suggestion-city">
                          {airport.city} ({airport.code})
                        </div>
                        <div className="suggestion-country">
                          {airport.country}
                        </div>
                      </div>
                      <button
                        onClick={() => handleSelectAirport(airport, "to")}
                        className="select-btn"
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Dates Row - اختياري */}
          <div className="input-row">
            <div className="input-group">
              <FaCalendarAlt className="input-icon" />
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="flight-input date-input"
                min={new Date().toISOString().split('T')[0]}
                placeholder="Departure Date (Optional)"
              />
            </div>
            
            {tripType === "roundtrip" && (
              <div className="input-group">
                <FaCalendarAlt className="input-icon" />
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="flight-input date-input"
                  min={departureDate || new Date().toISOString().split('T')[0]}
                  placeholder="Return Date (Optional)"
                />
              </div>
            )}
          </div>

          {/* Class & Passengers Row */}
          <div className="input-row">
            <div className="input-group select-group">
              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                className="flight-input flight-select"
              >
                <option value="economy">Economy Class</option>
                <option value="business">Business Class</option>
                <option value="first">First Class</option>
              </select>
            </div>
            
            <div className="input-group">
              <FaUsers className="input-icon" />
              <input
                type="number"
                min="1"
                max="10"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                placeholder="Passengers"
                className="flight-input"
              />
            </div>
          </div>

          {/* Search Button */}
          <button onClick={handleSearch} className="search-flights-btn">
            <FaSearch className="btn-icon" />
            Search Flights
          </button>
        </div>
      </div>

      {/* نتائج البحث - عرض كامل */}
      {showResults && searchResults.length > 0 && (
        <div className="flight-results-section">
          <div className="results-header">
            <h3 className="results-title">
              <FaCheckCircle className="results-icon" />
              Available Flights ({searchResults.length} Results)
            </h3>
            <button className="close-results-btn" onClick={handleCloseResults}>
              <FaTimes />
              <span>Clear Results</span>
            </button>
          </div>
          
          <div className="flights-list">
            {searchResults.map((flight) => (
              <div key={flight.id} className="flight-card-full">
                {/* Left Section - Airline Info */}
                <div className="flight-left">
                  <img src={flight.logo} alt={flight.airline} className="airline-logo-full" />
                  <div className="airline-details">
                    <h4 className="airline-name-full">{flight.airline}</h4>
                    <span className="flight-class">{flight.class} Class</span>
                  </div>
                </div>

                {/* Middle Section - Flight Info */}
                <div className="flight-middle">
                  <div className="flight-route-full">
                    <div className="route-point-full">
                      <span className="route-time-full">{flight.departureTime}</span>
                      <span className="route-location-full">{flight.from}</span>
                    </div>
                    
                    <div className="route-line-full">
                      <div className="line-wrapper">
                        <div className="line-dots"></div>
                        <FaPlane className="route-plane-icon" />
                        <div className="line-dots"></div>
                      </div>
                      <div className="route-info-full">
                        <FaClock className="info-icon" />
                        <span>{flight.duration}</span>
                        <span className="separator">•</span>
                        <span className="stops-badge">{flight.stops}</span>
                      </div>
                    </div>
                    
                    <div className="route-point-full">
                      <span className="route-time-full">{flight.arrivalTime}</span>
                      <span className="route-location-full">{flight.to}</span>
                    </div>
                  </div>

                  <div className="flight-date-full">
                    <FaCalendarAlt className="date-icon" />
                    <span>{new Date(flight.departureDate).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>

                {/* Right Section - Price & Book */}
                <div className="flight-right">
                  <div className="price-section">
                    <span className="price-label">Price per person</span>
                    <div className="price-amount-full">
                      <FaDollarSign className="dollar-icon" />
                      <span className="price-value">{flight.price}</span>
                    </div>
                    <span className="seats-available">{flight.availableSeats} seats left</span>
                  </div>
                  <button 
                    onClick={() => handleBookFlight(flight)}
                    className="book-now-btn-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default FlightSearch;