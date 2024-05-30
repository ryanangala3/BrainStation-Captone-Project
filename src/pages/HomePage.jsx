import React from "react";
import Header from "../components/Header/Header";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home-container">
      <Header />
      <div className="landing-container">
        <div className="landing-text__container">
          <h1 className="landing-title">Lorem</h1>
          <h1></h1>
        </div>
        <div className="landing-image__container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
