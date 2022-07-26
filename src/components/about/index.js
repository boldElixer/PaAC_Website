import React from "react";
import './about.css';
import NavBar from "../navbar";
import MediaCard from "../aboutCard";

function About () {
    return (
        <>
        <section className="about">
          <NavBar></NavBar>
      <div className="about">
        <MediaCard></MediaCard>
      </div>
    </section>
        </>
    )
}

export default About;