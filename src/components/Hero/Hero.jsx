import React from 'react'
import heroImage from "../../assets/Fitness tracker-bro.svg";
import "./Hero.scss";
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate();

  const goToWorkouts = () => {
    navigate('./workouts');
  }

  return (
    <div>
      <div className="landing-container">
        <div className="landing-text__container">
          <div className="landing-title__container">
          <h1 className="landing-title"><span className="span-colour">Keep Track</span> of Your Activity Habits!</h1>
          <h3 className="landing-subtitle">Take the first step towards a <span className="span-colour">healthy future</span> today!</h3>
          </div>
          <div className="button-container">
            <button className="button-get__started">Get Started</button>
            <button className="button-your__workouts" onClick={goToWorkouts}>Your Workouts</button>
          </div>
        </div>
        <div className="landing-image__container">
          <img className='hero-img' src={heroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero



