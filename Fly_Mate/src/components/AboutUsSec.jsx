// src/components/AboutUs.jsx
import { Link } from "react-router-dom";
import { 
  FaInfoCircle, 
  FaArrowRight, 
  FaPlane, 
  FaGlobe, 
  FaHeadset,
  FaShieldAlt 
} from "react-icons/fa";
import "../styles/AboutUsSec.css";

// Section Title Component (نفس اللي استخدمناه قبل كده)
const SectionTitle = ({ title, subtitle, icon }) => {
  return (
    <div className="section-title-wrapper">
      {icon && <span className="section-icon">{icon}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

function AboutUsSec() {
  const features = [
    {
      icon: <FaPlane />,
      title: "500+ Destinations",
      description: "Fly to over 500 destinations worldwide"
    },
    {
      icon: <FaGlobe />,
      title: "Global Coverage",
      description: "Partnered with 100+ airlines globally"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Round the clock customer assistance"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Booking",
      description: "Safe and encrypted transactions"
    }
  ];

  return (
    <section className="about-section" id="about-section">
      <SectionTitle 
        title="About Fly Mate"
        subtitle="Your trusted partner for seamless travel experiences"
        icon={<FaInfoCircle />}
      />

      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image-wrapper" data-aos="fade-right">
          <div className="about-image-box">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=700&fit=crop" 
              alt="About Fly Mate" 
              className="about-image"
            />
            <div className="image-overlay"></div>
            
            {/* Floating Stats Card */}
            <div className="floating-card">
              <div className="floating-stat">
                <span className="stat-number">10M+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="experience-badge">
              <span className="exp-number">15+</span>
              <span className="exp-text">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-content" data-aos="fade-left">
          <div className="about-tag">Who We Are</div>
          
          <h3 className="about-heading">
            Making Your Travel Dreams <span className="highlight">Come True</span>
          </h3>
          
          <p className="about-description">
            At Fly Mate, we believe that travel should be simple, affordable, and memorable. 
            Since our founding, we've been dedicated to connecting travelers with their dream 
            destinations through seamless booking experiences and exceptional customer service.
          </p>
          
          <p className="about-description">
            Our platform brings together the best airlines, competitive prices, and a 
            user-friendly interface to make your journey planning effortless. Whether you're 
            traveling for business or leisure, we're here to make every trip unforgettable.
          </p>

          {/* Features Grid */}
          {/* <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div> */}

          {/* CTA Button */}
          <Link to="/about" className="learn-more-btn">
            <span>Learn More</span>
            <FaArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSec;