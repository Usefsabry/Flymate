import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useTrips } from "../context/TripContext";

import "../styles/navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { tripCount, setTripCount } = useTrips();

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // 🟡 تحديث عدد الرحلات من localStorage
  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem("myTrips")) || [];
    setTripCount(trips.length);
  }, [location]); 

  
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

   
        <div className=" mytrip-link-wrapper">
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
          <div className="user-icon" onClick={(e) => { e.stopPropagation(); setUserMenu(v => !v); }}>
            <FaUser size={20} />
            <div className={`user-menu ${userMenu ? "open" : ""}`}>
              <Link to="/signup" onClick={() => setUserMenu(false)}>Sign Up</Link>
              <Link to="/login" onClick={() => setUserMenu(false)}>Log In</Link>
            </div>
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
