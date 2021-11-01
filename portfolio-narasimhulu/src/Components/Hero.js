import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero(props) {
  var { isDark } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="hero">
      <article className="container flex items_center justify_center ">
        <div className="flex items_center justify_center hero_parent_div column">
          <figure className="flex_48">
            <img className="width_full" src="/images/profession3.svg" alt="" />
          </figure>

          <div
            className={
              isDark === false
                ? "hero_data flex_42"
                : "hero_data flex_42 hero_data_dark"
            }
          >
            <h1
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
            >
              {" "}
              Hi, I am{" "}
              <span
                className={isDark === false ? "name_color" : "dark_name_color"}
              >
                Narasimhulu Vasam.
              </span>
            </h1>
            <h2>A Full Stack Web Developer.</h2>
            <p>
              Proficient in MERN stack, Passionate about implementing and
              launching new projects. Ability to translate business requirements
              into technical solutions. Looking to start the career as an
              entry-level software engineer with a reputed firm driven by
              technology.
            </p>
            <p>
              I enjoy learning new skills and implementing them in real life!
            </p>
            <nav className="flex justify_center items_center">
              <ul
                className={
                  isDark === false
                    ? "flex_15 flex justify_between icons"
                    : "flex_15 flex justify_between icons icons_dark"
                }
              >
                <li>
                  <a href="https://github.com/Narasimhuluv">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/vasam-narasimhulu-8085901b3/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/NarasimhuluV7">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
