import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Preloader from '../components/Preloader';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

 const FlightIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    style={{ width: "100%", height: "100%" }}
  >
    <path d="M10.18 9" />
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
);

  const HotelIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '100%', height: '100%'}}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );

  const CarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '100%', height: '100%'}}>
      <path d="M5 17h14v-4H5z"/>
      <path d="M5 13L2.5 9h19L19 13"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '100%', height: '100%'}}>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  );

  const RocketIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '100%', height: '100%'}}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );

  const services = [
    {
      id: 1,
      title: "Flight Booking",
      description: "Instant domestic & international flight bookings",
      icon: <FlightIcon />,
      details: "Real-time flight search with 1000+ airlines"
    },
    {
      id: 2,
      title: "Hotel Reservations",
      description: "Best hotel deals worldwide with price guarantee",
      icon: <HotelIcon />,
      details: "2M+ hotels across 200+ countries"
    },
    {
      id: 3,
      title: "Car Rentals",
      description: "Rent cars at best prices from trusted providers",
      icon: <CarIcon />,
      details: "50,000+ vehicles in 10,000+ locations"
    }
  ];

  const serviceTabs = [
    {
      id: 0,
      title: "Flight Booking",
      content: "Search and book flights from 1000+ airlines across 10,000+ destinations. Real-time pricing, instant confirmation, and 24/7 customer support. Domestic and international flights with flexible booking options.",
      features: ["1000+ Airlines", "Real-time Pricing", "Instant Confirmation", "24/7 Support", "Flexible Changes"]
    },
    {
      id: 1,
      title: "Hotel Reservations",
      content: "Book from 2M+ hotels worldwide with exclusive deals and price guarantee. Free cancellation options, verified reviews, and secure payments. Find perfect accommodation for business or leisure travel.",
      features: ["2M+ Hotels", "Price Guarantee", "Free Cancellation", "Verified Reviews", "Secure Payments"]
    },
    {
      id: 2,
      title: "Car Rentals",
      content: "Rent from 50,000+ vehicles across 10,000+ locations worldwide. Compare prices from trusted providers, free cancellation, and 24/7 roadside assistance. Economy to luxury cars available.",
      features: ["50K+ Vehicles", "Price Comparison", "Free Cancellation", "24/7 Assistance", "Multiple Locations"]
    }
  ];

  return (
    <>
      <Preloader/>
    <Navbar/>
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg)',
      fontFamily: '"Poppins", sans-serif',
      color: 'var(--text)'
    }}>
      {/* 1. HERO SECTION */}
      <section style={{ 
        position: 'relative',
        background: 'var(--nav-bg)',
        color: 'var(--text)',
        padding: '5rem 1rem',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '60px',
          height: '60px',
          animation: 'fly 8s linear infinite'
        }}>
          <FlightIcon />
        </div>
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          width: '200px',
          height: '80px',
          background: 'var(--hover)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: '150px',
          height: '60px',
          background: 'var(--hover)',
          borderRadius: '50%',
          filter: 'blur(15px)',
          animation: 'float 6s ease-in-out infinite 1s'
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, textAlign:"center"}}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            color: 'var(--text)'
          }}>
            Book Your Next <span style={{ 
              background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Journey</span> Effortlessly
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            opacity: 0.9,
            color: 'var(--text)'
          }}>
            Find and book flights, hotels, and car rentals with the best prices guaranteed. 
            Real-time availability, secure payments, and 24/7 customer support.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'var(--menu-bg)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid var(--dropdown-border)',
              textAlign: 'center',
              boxShadow: '0 1px 3px var(--hover)'
            }}>
              <div style={{ width: '40px', height: '40px', margin: '0 auto 0.5rem', color: 'var(--accent)' }}>
                <FlightIcon />
              </div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: 'var(--text)' }}>1000+ Airlines</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8, color: 'var(--text)' }}>Real-time availability</div>
            </div>
            <div style={{
              background: 'var(--menu-bg)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid var(--dropdown-border)',
              textAlign: 'center',
              boxShadow: '0 1px 3px var(--hover)'
            }}>
              <div style={{ width: '40px', height: '40px', margin: '0 auto 0.5rem', color: 'var(--accent)' }}>
                <HotelIcon />
              </div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: 'var(--text)' }}>2M+ Hotels</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8, color: 'var(--text)' }}>Worldwide coverage</div>
            </div>
            <div style={{
              background: 'var(--menu-bg)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid var(--dropdown-border)',
              textAlign: 'center',
              boxShadow: '0 1px 3px var(--hover)'
            }}>
              <div style={{ width: '40px', height: '40px', margin: '0 auto 0.5rem', color: 'var(--accent)' }}>
                <CarIcon />
              </div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: 'var(--text)' }}>50K+ Vehicles</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8, color: 'var(--text)' }}>10K+ locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section style={{ 
        padding: '5rem 1rem', 
        background: 'var(--bg)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'var(--text)'
            }}>
              Our Travel <span style={{ 
                background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Services</span>
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text)',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Complete travel solutions for flights, accommodation, and transportation
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                style={{
                  background: 'var(--menu-bg)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 6px -1px var(--hover), 0 2px 4px -1px var(--hover)',
                  border: '1px solid var(--dropdown-border)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `fadeInUp 0.6s ${index * 0.2}s forwards`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px var(--hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px var(--hover), 0 2px 4px -1px var(--hover)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 10px 25px rgba(47, 180, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  padding: '20px',
                  color: 'var(--btn-color)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
                >
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: 'var(--text)',
                  opacity: 0.8,
                  textAlign: 'center',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--dropdown-border)',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                    color: 'var(--btn-color)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 15px rgba(47, 180, 255, 0.3)'
                  }}>
                    Starting $29
                  </span>
                  <span style={{
                    color: 'var(--text)',
                    opacity: 0.7,
                    fontWeight: '500',
                    fontSize: '0.95rem'
                  }}>
                    Instant booking
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE DETAILS */}
      <section style={{ 
        padding: '5rem 1rem',
        background: 'var(--nav-bg)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'var(--text)'
            }}>
              <span style={{ 
                background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Service</span> Details
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text)',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Discover how our services make your travel planning seamless and stress-free
            </p>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Tab Navigation */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '1rem 2rem',
                    background: activeTab === tab.id 
                      ? `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)` 
                      : 'var(--menu-bg)',
                    color: activeTab === tab.id ? 'var(--btn-color)' : 'var(--text)',
                    border: activeTab === tab.id ? 'none' : '1px solid var(--dropdown-border)',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeTab === tab.id 
                      ? `0 10px 25px rgba(47, 180, 255, 0.3)` 
                      : '0 1px 3px var(--hover)',
                    transform: activeTab === tab.id ? 'scale(1.05)' : 'scale(1)',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.transform = 'scale(1.02)';
                      e.target.style.background = `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`;
                      e.target.style.color = 'var(--btn-color)';
                      e.target.style.boxShadow = `0 4px 15px rgba(47, 180, 255, 0.2)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.background = 'var(--menu-bg)';
                      e.target.style.color = 'var(--text)';
                      e.target.style.boxShadow = '0 1px 3px var(--hover)';
                    }
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{
              background: 'var(--menu-bg)',
              borderRadius: '24px',
              padding: '3rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
              border: '1px solid var(--dropdown-border)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                gap: '3rem',
                alignItems: 'start'
              }}>
                {/* Content */}
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      color: 'var(--text)',
                      marginBottom: '0.5rem'
                    }}>
                      {serviceTabs[activeTab].title}
                    </h3>
                    <div style={{
                      width: '100px',
                      height: '4px',
                      background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                      borderRadius: '2px'
                    }}></div>
                  </div>
                  
                  <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--text)',
                    opacity: 0.8,
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                  }}>
                    {serviceTabs[activeTab].content}
                  </p>

                  {/* Features */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2rem'
                  }}>
                    {serviceTabs[activeTab].features.map((feature, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 1.25rem',
                        background: 'var(--hover)',
                        borderRadius: '12px',
                        border: '1px solid var(--dropdown-border)', 
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 10px var(--hover)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(8px)';
                        e.currentTarget.style.boxShadow = `0 8px 25px rgba(47, 180, 255, 0.15)`;
                        e.currentTarget.style.background = `rgba(47, 180, 255, 0.05)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px var(--hover)';
                        e.currentTarget.style.background = 'var(--hover)';
                      }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--btn-color)',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          flexShrink: 0,
                          padding: '3px'
                        }}>
                          <CheckIcon />
                        </div>
                        <span style={{ fontWeight: '500', color: 'var(--text)' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                    padding: '1.5rem',
                    background: 'var(--hover)',
                    borderRadius: '16px',
                    border: '1px solid var(--dropdown-border)'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--accent)' }}>
                        10,000+
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text)', opacity: 0.8, fontWeight: '500' }}>
                        Destinations
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--accent)' }}>
                        99.9%
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text)', opacity: 0.8, fontWeight: '500' }}>
                        Uptime
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--accent)' }}>
                        24/7
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text)', opacity: 0.8, fontWeight: '500' }}>
                        Support
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)`,
                    borderRadius: '24px',
                    padding: '3rem 2rem',
                    boxShadow: '0 25px 50px -12px rgba(47, 180, 255, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '400px',
                    color: 'var(--btn-color)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '120px',
                      height: '120px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      animation: 'pulse 3s infinite'
                    }}></div>
                    <div style={{
                      width: '140px',
                      height: '140px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 2rem',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      padding: '30px'
                    }}>
                      <div style={{color: 'var(--btn-color)'}}>
                        {services[activeTab].icon}
                      </div>
                    </div>
                    <h4 style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: 'var(--btn-color)',
                      marginBottom: '1rem'
                    }}>
                      Instant Booking
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'var(--btn-color)',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '9999px',
                        display: 'inline-block',
                        backdropFilter: 'blur(10px)',
                        fontSize: '1.125rem',
                        fontWeight: '600'
                      }}>
                        Under 60 Seconds
                      </div>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        color: 'var(--btn-color)',
                        margin: '1rem 0'
                      }}>
                        <RocketIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fly {
          0% { transform: translateX(-100px) rotate(-5deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(150vw) rotate(5deg); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.2); }
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Services;