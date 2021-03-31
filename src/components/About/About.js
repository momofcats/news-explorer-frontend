import React from "react";
import "./About.css";
import profile from "../../images/profile-img.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__img-container">
        <img alt="Profile" className="about__img" src={profile} />
      </div>
      <div className="about__text-container">
        <h3 className="about__title">About the Author</h3>
        <p className="about__text">
          My name is Yuliya Khilko. I'm a full-stack web developer. I'm coming
          from chemical engineering and genomic research background. I've
          learned to code through various online resources and Practicum by
          Yandex. This app was my final project at Practicum. I've built both
          the backend and the frontend. The tech stack is MERN(MongoDB,
          ExpressJS, React, Node).
        </p>
      </div>
    </section>
  );
}
export default About;
