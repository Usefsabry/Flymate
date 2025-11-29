import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Firebase"; 
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // 👈 استورد useTheme
import { FaMoon, FaSun } from "react-icons/fa"; // 👈 استورد الأيقونات
import Preloader from "../components/Preloader";

function SignUpForm() {
  const { theme, toggleTheme } = useTheme(); // 👈 استخدم الـ Context
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <Preloader/>
    <div className="signup-container">
      {/* 👇 زرار الـ Dark Mode */}
      <button className="theme-toggle-signup" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>

      <h2 className="signup-header">Sign Up</h2>
      <h1 className="signup-title">Sign up to your account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <div className="signup-policy">
          By clicking up you confirm that you've read and accept our{" "}
          <span className="signup-bold">Policy</span> and{" "}
          <span className="signup-bold">Privacy</span>
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        {error && <div style={{ color: "red", marginTop: "9px" }}>{error}</div>}
      </form>
      <div className="or-separator">
        <hr className="line" />
        <span className="or-text">Or</span>
        <hr className="line" />
      </div>
      <div className="already-account">
        Already Have An Account?{" "}
        <Link className="sign-in" to="/login">
          Sign In
        </Link>
      </div>
    </div>
    </>
  );
}

export default SignUpForm;