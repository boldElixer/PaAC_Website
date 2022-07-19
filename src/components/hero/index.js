import React from "react";
import './hero.css';
import NavBar from "../navbar";
import MediaCard from "../aboutCard";
function Hero () {
    return (
        <>
        <section className="header">
          <NavBar></NavBar>
      <div className="text-box">
        <h1>Physics and Astronomy Club</h1>
        <p>IIT Roorkee</p>
      </div>
    </section>
        </>
    )
}

export default Hero;