import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          
        </div>
        <div className="nav-right">
          <button onClick={() => navigate("/")} className="nav-link">Home</button>
          <button onClick={() => navigate("/about")} className="nav-link">About Us</button>
          <button onClick={() => navigate("/contact")} className="nav-link">Contact</button>
          
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Welcome to NGO Connect</h1>
        <p>Your hub for grants, events, and impact-driven matching.</p>

        <div className="login-buttons">
          <button onClick={() => navigate("/login")} className="login-btn ngo">
            Login as NGO
          </button>
          <button onClick={() => navigate("/login?type=donor")} className="login-btn donor">
            Login as Donor
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <h2>Up-to-Date Proposal Requests</h2>
          <p>
            Automatically scraped grant opportunities tailored for NGOs.
            Updated daily using our smart crawler.
          </p>
          <button onClick={() => navigate("/proposals")} className="feature-btn">View Proposals</button>
        </div>

        <div className="feature-card">
          <h2>Events & Webinars in Lebanon</h2>
          <p>
            Stay informed about workshops, trainings, and webinars relevant to your field.
          </p>
          <button onClick={() => navigate("/events")} className="feature-btn">View Events</button>
        </div>

        <div className="feature-card">
          <h2>NGO–Donor Matching</h2>
          <p>
            Smart matching system connecting NGOs and donors based on interests and goals.
          </p>
          <button onClick={() => navigate("/matching")} className="feature-btn">Learn More</button>
        </div>

      </section>

    </div>
  );
}
