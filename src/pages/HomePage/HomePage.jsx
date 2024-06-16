import React from "react";
import Header from "../../components/Header/Header";
import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
    <div className="home-container">
      <Header />
      <Hero />
    </div>
    <Footer />
    </>
  );
}

export default HomePage;
