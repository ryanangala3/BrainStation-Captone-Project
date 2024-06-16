import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-link__list">
          <div className="nav-subtitle__container">
          <Link to="/workouts" className="nav-link">Your Workouts</Link>
          </div>
        </div>
        <div className="nav-title__container">
        <Link to="/" className="nav-title">ACTIVE AURA</Link>
        </div>
        <div className="nav-link__list">
          <div className="nav-subtitle__container">
          <Link to="/workouts" className="nav-link">Log A Workout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
