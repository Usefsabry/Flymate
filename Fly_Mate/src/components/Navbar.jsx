import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useTrips } from "../context/TripContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/Firebase";

import "../styles/navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { tripCount, setTripCount } = useTrips();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const userMenuRef = useRef(null); // للإشارة إلى الـ dropdown

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // ✅ Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // true if user exists, false otherwise
    });

    return () => unsubscribe();
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenu(false);
      }
    };

    if (userMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenu]);

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem("myTrips")) || [];
    setTripCount(trips.length);
  }, [location, setTripCount]); 

  const handleNavClick = (path, sectionId) => {
    setMenuOpen(false);

    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const handleBookNowClick = () => {
    if (isHome) {
      document.getElementById("booking_id")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToBooking: true } });
    }
  };

  // ✅ Handle user icon click
  const handleUserIconClick = (e) => {
    e.stopPropagation();
    
    if (isLoggedIn) {
      // If logged in, navigate to profile
      navigate("/profile");
    } else {
      // If not logged in, toggle dropdown
      setUserMenu(v => !v);
    }
  };

  return (
    <nav>
      {/* ------------ Logo ------------ */}
      <div className="logo">
        <Link to="/">Fly<span>Mate</span></Link>
      </div>

      {/* ------------ Links ------------ */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

        <button className="nav-btn" onClick={() => handleNavClick("/about", "about-section")}>
          About Us
        </button>

        <button className="nav-btn" onClick={() => handleNavClick("/services", "services-section")}>
          Services
        </button>

        <div className="mytrip-link-wrapper">
          <Link to="/mytrip" onClick={() => setMenuOpen(false)} className="mytrip-link">
            My Trip
          </Link>

          {tripCount > 0 && (
            <span className="trip-badge">{tripCount}</span>
          )}
        </div>

        <ScrollLink
          to="footer-section"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </ScrollLink>
      </div>

      {/* ------------ Right Section ------------ */}
      <div className="nav-right">
        <button className="book-btn" onClick={handleBookNowClick}>
          Book Now
        </button>

        <div className="icons-right">
          {/* ✅ User Icon with Ref */}
          <div 
            className="user-icon" 
            onClick={handleUserIconClick}
            ref={userMenuRef}
          >
            <FaUser size={20} />
            
            {/* ✅ Show dropdown ONLY if user is NOT logged in */}
            {!isLoggedIn && (
              <div className={`user-menu ${userMenu ? "open" : ""}`}>
                <Link to="/signup" onClick={() => setUserMenu(false)}>Sign Up</Link>
                <Link to="/login" onClick={() => setUserMenu(false)}>Log In</Link>
              </div>
            )}
          </div>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;