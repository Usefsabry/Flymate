import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import Preloader from "../components/Preloader";

function SignUpForm() {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // نفس regex بتاع signin
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Preloader />

      <div className="signup-container">
        <button className="theme-toggle-signup" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        <h2 className="signup-header">Sign Up</h2>
        <h1 className="signup-title">Create your account</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="signup-input"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="signup-input"
          />

          {/* Email input – no browser validation */}
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
          />

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          {error && <div className="signin-error">{error}</div>}
        </form>

        <div className="or-separator">
          <hr className="line" />
          <span className="or-text">Or</span>
          <hr className="line" />
        </div>

        <div className="already-account">
          Already have an account?{" "}
          <Link className="sign-in" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
