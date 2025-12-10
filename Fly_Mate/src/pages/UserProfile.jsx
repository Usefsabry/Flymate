import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Config/Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import { FaPlane, FaUser, FaSignOutAlt, FaBars, FaSuitcase, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import '../styles/UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [bookedTrips, setBookedTrips] = useState([]);
    const navigate = useNavigate();
    const { theme } = useTheme();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/login');
            }
            setLoading(false);
        });

        // Load trips from localStorage (simulating backend)
        const trips = JSON.parse(localStorage.getItem("myTrips")) || [];
        setBookedTrips(trips);

        return () => unsubscribe();
    }, [navigate]);

 const handleLogout = async () => {
    try {
        await signOut(auth);
        navigate('/'); 
    } catch (error) {
        console.error("Error signing out: ", error);
    }
};

    if (loading) {
        return <Preloader />;
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Get the next upcoming trip (first one in the list for now)
    const nextTrip = bookedTrips.length > 0 ? bookedTrips[0] : null;

    return (
        <>
         <Preloader />
            <Navbar />
            <div className={`dashboard-container ${theme === 'dark' ? 'dark-mode' : ''}`}>

                {/* Mobile Sidebar Toggle */}
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                    <FaBars />
                </button>

                {/* Sidebar */}
                <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <div className="user-avatar-placeholder">
                            {user?.displayName ? user.displayName.substring(0, 2).toUpperCase() : "AA"}
                        </div>
                        <h3 className="sidebar-username">{user?.displayName || "Traveler"}</h3>
                    </div>

                    <nav className="sidebar-nav">
                        <button
                            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dashboard')}
                        >
                            <MdDashboard className="nav-icon" /> Dashboard
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
                            onClick={() => setActiveTab('bookings')}
                        >
                            <FaPlane className="nav-icon" /> My Bookings
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'personal' ? 'active' : ''}`}
                            onClick={() => setActiveTab('personal')}
                        >
                            <FaUser className="nav-icon" /> Personal Info
                        </button>
                    </nav>

                    <div className="sidebar-footer">
                        <button className="sign-out-btn" onClick={handleLogout}>
                            <FaSignOutAlt className="nav-icon" /> Sign Out
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="dashboard-main">
                    <header className="dashboard-header">
                        <h1>Welcome, {user?.displayName?.split(' ')[0] || "Traveler"}!</h1>
                        <p className="date-display">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </header>

                    {activeTab === 'dashboard' && (
                        <>
                            {/* Upcoming Trip Card */}
                            <section className="upcoming-trip-section">
                                {nextTrip ? (
                                    <div className="trip-card">
                                        <div className="trip-card-header">
                                            <h2>Your Next Trip</h2>
                                            <FaPlane className="trip-icon-large" />
                                        </div>
                                        <div className="trip-details">
                                            <div className="trip-route">
                                                <span className="city-code">{nextTrip.from.split('(')[1]?.replace(')', '') || nextTrip.from}</span>
                                                <span className="route-arrow">→</span>
                                                <span className="city-code">{nextTrip.to.split('(')[1]?.replace(')', '') || nextTrip.to}</span>
                                            </div>
                                            <div className="trip-meta">
                                                <p><strong>Date:</strong> {new Date(nextTrip.departureDate).toLocaleDateString()}</p>
                                                <p><strong>Airline:</strong> {nextTrip.airline}</p>
                                                <p><strong>Class:</strong> {nextTrip.class}</p>
                                            </div>
                                        </div>
                                        <button className="btn-view-details" onClick={() => setActiveTab('bookings')}>View All Bookings</button>
                                    </div>
                                ) : (
                                    <div className="trip-card empty-card">
                                        <div className="empty-content">
                                            <FaSuitcase className="empty-icon-large" />
                                            <h3>No Upcoming Trips</h3>
                                            <p>You haven't booked any flights yet.</p>
                                            <button className="btn-view-details" onClick={() => navigate('/')}>Book a Flight</button>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Quick Stats Widgets */}
                            <section className="stats-grid">
                                <div className="stat-widget">
                                    <h3>Total Flights</h3>
                                    <p className="stat-value">{bookedTrips.length}</p>
                                </div>
                                <div className="stat-widget">
                                    <h3>Account Status</h3>
                                    <p className="stat-value active-status">Active</p>
                                </div>
                            </section>
                        </>
                    )}

                    {activeTab === 'bookings' && (
                        <section className="bookings-list-section">
                            <h2>My Bookings</h2>
                            {bookedTrips.length > 0 ? (
                                <div className="bookings-grid">
                                    {bookedTrips.map((trip) => (
                                        <div key={trip.id} className="booking-item-card">
                                            <div className="booking-header">
                                                <span className="airline-name">{trip.airline}</span>
                                                <span className="booking-price">{trip.price}</span>
                                            </div>
                                            <div className="booking-route">
                                                <div className="route-point">
                                                    <span className="code">{trip.from.split('(')[1]?.replace(')', '') || trip.from}</span>
                                                    <span className="time">{trip.departureTime}</span>
                                                </div>
                                                <div className="route-duration">
                                                    <span className="line">----------------</span>
                                                    <FaPlane className="plane-icon-small" />
                                                </div>
                                                <div className="route-point">
                                                    <span className="code">{trip.to.split('(')[1]?.replace(')', '') || trip.to}</span>
                                                    <span className="time">{trip.arrivalTime}</span>
                                                </div>
                                            </div>
                                            <div className="booking-footer">
                                                <span className="date"><FaCalendarAlt /> {new Date(trip.departureDate).toLocaleDateString()}</span>
                                                <span className="class-badge">{trip.class}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-bookings">
                                    <p>No bookings found.</p>
                                    <button className="btn-view-details" onClick={() => navigate('/')}>Book Now</button>
                                </div>
                            )}
                        </section>
                    )}

                    {activeTab === 'personal' && (
                        <section className="personal-info-section">
                            <h2>Personal Information</h2>
                            <div className="info-card">
                                <div className="info-row">
                                    <label>Full Name</label>
                                    <input type="text" value={user?.displayName || ''} readOnly />
                                </div>
                                <div className="info-row">
                                    <label>Email Address</label>
                                    <input type="text" value={user?.email || ''} readOnly />
                                </div>
                                <div className="info-row">
                                    <label>Member Since</label>
                                    <input type="text" value={new Date(user?.metadata?.creationTime).toLocaleDateString() || 'N/A'} readOnly />
                                </div>
                            </div>
                        </section>
                    )}

                </main>
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;
