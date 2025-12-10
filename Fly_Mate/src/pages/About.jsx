import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../styles/About.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImage from '../assets/p1.jpg';



const Preloader = () => {
    return (
        <div className="preloader">
            <svg className="svg-loader" xmlns="http://www.w3.org/2000/svg" width="230" height="230">
                <path className="loader__path"
                    d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z"
                    fill="none" stroke="#0099cc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="10 10 10 10 10 10 10 432" strokeDashoffset="77" />
                <path className="loader__plane"
                    d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z"
                    fill="#000033" /></svg>
        </div>
    );
};

const BannerSection = () => {
    return (
        <section
            className="banner-section inner-banner-section bg-overlay-black bg_img"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px'
            }}
        >
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-12 text-center">
                        <div className="banner-content">
                            <h1 className="title">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section className="about-section about--style page-wrapper-two ptb-120">
            <div className="container">
                <div className="row justify-content-center mb-30-none">
                    <div className="col-xl-6 col-lg-6 mb-30">
                        <div className="about-thumb">
                            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=700&fit=crop" alt="about" />
                            <div className="about-element-two">
                                {/* Element placeholder */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-30">
                        <div className="about-content">
                            <span className="sub-title text--base">About Us</span>
                            <h2 className="title">Your Global Gateway to Effortless Travel Planning and Booking</h2>
                            <p>We are a cutting-edge online travel agency (OTA) committed to simplifying the complexity of flight searching and booking. Our platform connects you instantly to thousands of routes, airlines, and the best available fares globally.</p>

                            <div className="about-book-area">
                                <div className="about-book-left">
                                    <h3 className="call-title">Need Help Booking?</h3>
                                    <span className="call"><a href="tel:800-555-FLYT">800-555-FLYT</a></span>
                                </div>
                               <div className="about-book-right">
                                            <Link to="/">
                                                <button className="btn--base">Book Now</button>
                                            </Link>
                                            </div>
                            </div>

                            <div className="about-list-area">
                                <ul className="about-list">
                                    <li><span>✓</span> Best Price Guarantee</li>
                                    <li><span>✓</span> 24/7 Global Support</li>
                                    <li><span>✓</span> Flexible Date Search</li>
                                </ul>
                            </div>
                            <p>Our commitment is to transparency and trust. We eliminate hidden fees and provide clear options, ensuring you get the most value whether you are traveling for business or pleasure.</p>

                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ChooseSection = () => {
    const chooseItems = [
        {
            title: 'Best Price Guarantee',
            text: 'We compare prices from thousands of global airlines to ensure you get the lowest possible price for your ticket.',
            bg: aboutImage
        },
        {
            title: 'Flexible Payment Options',
            text: 'Book your flight now and choose from multiple payment options that suit your budget. No payment restrictions.',
            bg: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop'
        },
        {
            title: '24/7 Customer Support',
            text: 'Our team is available around the clock to assist you with any inquiries or changes before and during your trip.',
            bg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Easy Booking Management',
            text: 'Modify, cancel, or add new services to your booking with simple clicks through our app or website.',
            bg: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop'
        },
        {
            title: 'Rewards and Loyalty Points',
            text: 'Earn points with every booking and redeem them for instant discounts on your future flights and hotels.',
            bg: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop'
        },
        {
            title: 'Data Security and Privacy',
            text: 'We use the latest encryption technologies to ensure the complete security of your transactions and personal data.',
            bg: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop'
        },
    ];

    return (
        <section className="choose-section bg--gray ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 text-center">
                        <div className="section-header">
                            <span className="sub-title"><span>Why Us?</span></span>
                            <h2 className="section-title">Why Choose Our Booking Platform?</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-30-none">
                    {chooseItems.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div
                                className="choose-item"
                                style={{ backgroundImage: `url('${item.bg}')` }}
                            >
                                <div className="item-content-default">
                                    <span className="num">0{index + 1}</span>
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>

                                <div className="item-content-hover">
                                    <span className="hover-num">0{index + 1}</span>
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CounterSection = () => {
    const finalStats = {
        professionalPilots: 95,
        jetAirplanes: 68,
        worldAirports: 290,
        directions: 195
    };

    const [currentStats, setCurrentStats] = useState({
        professionalPilots: 0, jetAirplanes: 0, worldAirports: 0, directions: 0
    });

    const sectionRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const duration = 2000; // Animation duration in ms
        const steps = 50; // Number of updates
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            setCurrentStats(prev => {
                const nextStats = { ...prev };
                let allDone = true;

                for (const key in finalStats) {
                    if (nextStats[key] < finalStats[key]) {
                        const increment = Math.ceil(finalStats[key] / steps);
                        nextStats[key] = Math.min(nextStats[key] + increment, finalStats[key]);
                        allDone = false;
                    }
                }

                if (allDone) clearInterval(timer);
                return nextStats;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [hasStarted]);

    return (
        <section
            ref={sectionRef}
            className="statistics-section bg-overlay-black ptb-120 bg_img"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1483450389192-3d3a4d71902f?q=80&w=2070&auto=format&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container">
                <div className="statistics-area">
                    <div className="row mb-30-none">
                        {Object.entries(currentStats).map(([key, value], index) => (
                            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                <div className="statistics-item">
                                    <div className="statistics-content">
                                        <div className="odo-area">
                                            <h3 className="odo-title">{value}</h3>
                                        </div>
                                        <p>{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HistorySection = () => {
    return (
        <section className="history-section pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 text-center">
                        <div className="section-header">
                            <span className="sub-title"><span>Our Legacy</span></span>
                            <h2 className="section-title">Innovating the Future of Travel: Our Timeline</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="history-area">
                            <div className="history-item">
                                <div className="history-content-left">
                                    <div className="history-content">
                                        <h3 className="title">Inception & First Flight Booked</h3>
                                        <p>The journey began with a mission to simplify searching for flights. Our platform went live, recording its first successful international booking.</p>
                                        <span className="date">2016</span>
                                    </div>
                                </div>
                                <div className="history-thumb">
                                    <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop" alt="history" />
                                </div>
                            </div>

                            <div className="history-item">
                                <div className="history-thumb">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="history" />
                                </div>
                                <div className="history-content-right">
                                    <div className="history-content">
                                        <h3 className="title">Dynamic Pricing Engine Launch</h3>
                                        <p>We introduced a proprietary algorithm that constantly monitors market fluctuations, ensuring customers always receive the most competitive prices in real-time.</p>
                                        <span className="date">2019</span>
                                    </div>
                                </div>
                            </div>

                            <div className="history-item">
                                <div className="history-content-left">
                                    <div className="history-content">
                                        <h3 className="title">Multi-Modal Travel Integration</h3>
                                        <p>Expanded our offering beyond flights to include seamless booking for trains, buses, and rental cars, creating comprehensive door-to-door travel packages.</p>
                                        <span className="date">2022</span>
                                    </div>
                                </div>
                                <div className="history-thumb">
                                    <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2070&auto=format&fit=crop" alt="history" />
                                </div>
                            </div>

                            <div className="history-item">
                                <div className="history-thumb">
                                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" alt="history" />
                                </div>
                                <div className="history-content-right">
                                    <div className="history-content">
                                        <h3 className="title">Carbon Offset Initiative</h3>
                                        <p>Launched our sustainability program, giving every user the option to contribute to carbon offsetting projects, minimizing the environmental impact of their travel.</p>
                                        <span className="date">2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutUs = () => {




    return (
        <React.Fragment>

            <Preloader />
           < Navbar/>
            <main>
                <BannerSection />
                <AboutSection />
                <CounterSection />
                <HistorySection />
                <ChooseSection />
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default AboutUs;
