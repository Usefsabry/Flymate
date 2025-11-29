import React from 'react';
import { Shield, Clock, Award, Headphones } from 'lucide-react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Secure Booking",
      description: "Your payments are protected with bank-level encryption and secure payment gateways"
    },
    {
      icon: <Clock size={40} />,
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist you with any queries"
    },
    {
      icon: <Award size={40} />,
      title: "Best Prices",
      description: "We guarantee competitive prices and exclusive deals on flights worldwide"
    },
    {
      icon: <Headphones size={40} />,
      title: "Easy Cancellation",
      description: "Flexible cancellation policies with hassle-free refunds and rescheduling options"
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="wcu-container">
        <div className="wcu-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="wcu-subtitle">
            Experience the difference with FlyMate - Your trusted travel companion
          </p>
        </div>

        <div className="wcu-grid">
          {features.map((feature, index) => (
            <div key={index} className="wcu-card">
              <div className="wcu-icon">
                {feature.icon}
              </div>
              <h3 className="wcu-card-title">{feature.title}</h3>
              <p className="wcu-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;