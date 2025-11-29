import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { useTheme } from "../context/ThemeContext"; // 👈 استورد useTheme
import { FaMoon, FaSun } from "react-icons/fa"; // 👈 استورد الأيقونات
import "../styles/LogIn.css"; 
import Preloader from "../components/Preloader";

function LoginPage() {
  const { theme, toggleTheme } = useTheme(); // 👈 استخدم الـ Context
  const [formData, setFormData] = useState({
    email: "",
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
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Preloader/>
    <div className="login-container">
      {/* 👇 زرار الـ Dark Mode */}
      <button className="theme-toggle-login" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>

      <h2 className="login-header">Sign In</h2>
      <h1 className="login-title">Sign in to your account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            required
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
            required
          />
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
        {error && <div style={{ color: "red", marginTop: "9px" }}>{error}</div>}
      </form>
      <div className="or-separator">
        <hr className="line" />
        <span className="or-text">Or</span>
        <hr className="line" />
      </div>
      <div className="login-register">
        Not Register Yet? <Link to="/signup" className="create-account">Create an account</Link>
      </div>
    </div>
    </>
  );
}

export default LoginPage;