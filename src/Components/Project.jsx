import { NavLink } from "react-router-dom";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="all-project">
        <main className="project-content">
          <div className="top">
            <h1 className="project-heading">My projects.</h1>
            <p className="project-para">
              Here are some project I&apos;ve worked recently.
            </p>{" "}
          </div>
          {/*&apos; for ' */}
          <div className="project-box">
            <section className="project">
              <h1 className="project-heading-box">Digital clock</h1>
              <p className="project-para-box">
                Digital clock was the first project when I learned reactjs.
              </p>
              <NavLink to="/">
                <button>Github</button>
              </NavLink>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Project;
