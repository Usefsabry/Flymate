import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { useTheme } from "../context/ThemeContext"; 
import { FaMoon, FaSun } from "react-icons/fa"; 
import "../styles/LogIn.css"; 
import Preloader from "../components/Preloader";

function LoginPage() {
  const { theme, toggleTheme } = useTheme(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email.trim()) {
      return setError("✖ Email is required.");
    }

    if (!validateEmail(formData.email)) {
      return setError("✖ Please enter a valid email address.");
    }

    if (!formData.password.trim()) {
      return setError("✖ Password is required.");
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("✖ No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("✖ Incorrect password. Please try again.");
      } else {
        setError("✖ Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <Preloader/>
      <div className="login-container">

        <button className="theme-toggle-login" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        <h2 className="login-header">Sign In</h2>
        <h1 className="login-title">Sign in to your account</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="login-input"
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}
        </form>

        <div className="or-separator">
          <hr className="line" />
          <span className="or-text">Or</span>
          <hr className="line" />
        </div>

        <div className="login-register">
          Not Register Yet?{" "}
          <Link to="/signup" className="create-account">Create an account</Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
