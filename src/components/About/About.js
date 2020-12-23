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
          My name is Yuliya Khilko. I'm a full-stack web develolper. The stack
          is comprised of Node.js and MingoDB(back-end), HTML5/CSS/JavaScript
          and React.js(front-end).
        </p>
        <p className="about__text">
          I recieved my training trought Ptacticum by Yandex. The course taught
          me the fundamentals of JavaScript, html and CSS. Further into the
          couse I was exposed to React.js ans Node.js. My experience was great.
          The best part about it is that the course is project-based. I've
          learned a lot by doing those independent projects. I also appreciate
          that I've got some experince with code reviews.
        </p>
      </div>
    </section>
  );
}
export default About;
