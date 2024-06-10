import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-link__list">
          <div className="nav-subtitle__container">
            <a href="" className="nav-link">
              Log A Workout
            </a>
          </div>
        </div>
        <div className="nav-title__container">
          <h1 className="nav-title">ACTIVE AURA</h1>
        </div>
        <div className="nav-link__list">
          <div className="nav-subtitle__container">
            <a href="" className="nav-link">
              User Workouts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
