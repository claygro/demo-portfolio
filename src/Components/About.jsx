import "./About.css";
import aboutBoy from "../assets/about-boy.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="about-container">
        <main className="about-content">
          <section className="flex-about">
            <div className="left">
              <h1 className="about-heading">Front-End developer from Nepal.</h1>
              <p className="about-para">
                I am Front-end developer with experties in Javascript and good{" "}
                <br />
                knowledge of react. <br /> I have 1 years of Javascript
                experience.
              </p>
            </div>
            <div className="right">
              <img src={aboutBoy} alt="" className="about-boy" />
            </div>
          </section>
          <div className="about-icon">
            <NavLink to="https://github.com/claygro">
              <i
                className="fa-brands fa-github"
                style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
              ></i>
            </NavLink>
            <NavLink to="/">
              <i
                className="fa-brands fa-facebook"
                style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
              ></i>
            </NavLink>
            <NavLink to="/">
              <i
                className="fa-brands fa-discord"
                style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
              ></i>
            </NavLink>
          </div>
          <section className="hobbies">
            <h1 className="hobbies-heading">My Hobbies.</h1>
            <ul>
              <li className="about-li">Playing games</li>
              <li className="about-li">Coding</li>
              <li className="about-li">Drawing</li>
              <li className="about-li">Reading</li>
            </ul>
          </section>
          <h1 className="skill-heading">My skills</h1>

          <section className="skills">
            <img src={html} alt="" className="about-img" />
            <img src={css} alt="" className="about-img" />{" "}
            <img src={js} alt="" className="about-img" />{" "}
            <img src={react} alt="" className="about-img" />
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
