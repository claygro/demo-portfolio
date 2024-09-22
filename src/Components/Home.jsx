import "./Home.css";
import boy from "../assets/boy.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="home-content">
          <main className="img">
            <img src={boy} alt="img" className="home-img" />
          </main>
          <main className="animation">
            <h1 className="home-heading">
              Hello👋 I am <span className="home-span">Research Dhamala</span> a
              Front-End developer.
            </h1>
            <p className="home-para">
              I am a front-end web developer from Nepal.
            </p>
            <p className="home-para2">Doing since 2023</p>
          </main>
          <br />
          <br />
          <div className="icon">
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
        </section>
      </div>
    </>
  );
};

export default Home;
