import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

function About(props) {
  var { isDark } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      className={
        isDark === false
          ? "container about flex justify_center"
          : "container about flex justify_center about_dark"
      }
    >
      <div className="flex_80">
        <article className="flex desktop_column justify_center">
          <div data-aos="fade-left" className="flex skills_headDiv">
            <div className="flex flex_33 items_center">
              <h2 className="heading" id="aboutme">
                About Me
              </h2>
              <div className="stright_line_verticle"></div>
            </div>
          </div>

          <div className="flex  about_data column">
            <div className="flex_28">
              <div>
                <p>
                  Hello! I'm Narasimhulu Vasam, from Kadapa(D), AndhraPradesh,
                  also known as YSR District , AndhraPradesh.
                </p>
                <p>
                  I am a creative, time punctual, dedicated, goal-oriented
                  individual with decent moral Values and Ethicates along with a
                  high-energy level, honed communication skills, strong
                  organizational skills, and meticulous attention to detail.
                </p>
                <p>
                  I have done my Post Graduation from YVU (
                  <a href="http://www.yogivemanauniversity.ac.in/">
                    Yogi Vemana University
                  </a>
                  ) , Kadapa, AndhraPradesh in Specialization of Commerce
                  (2018-2020).
                </p>
                <p>Here are a few of the other activities that I love to do!</p>
              </div>
              <div className="about_skills">
                <ul className="">
                  <li className="flex items_center">
                    <ChevronRightOutlinedIcon /> <span>Coding</span>
                  </li>
                  <li className="flex items_center">
                    <ChevronRightOutlinedIcon /> <span>Reading</span>
                  </li>
                  <li className="flex items_center">
                    <ChevronRightOutlinedIcon /> <span>Problem Solving</span>
                  </li>
                  <li className="flex items_center">
                    <ChevronRightOutlinedIcon /> <span>Team Management</span>
                  </li>
                  <li className="flex items_center">
                    <ChevronRightOutlinedIcon /> <span>Mentoring</span>
                  </li>
                </ul>
              </div>
            </div>
            <figure data-aos="zoom-in-up" className="flex_33 about_banner">
              <img className="width_full" src="/images/about.svg" alt="" />
            </figure>
          </div>
        </article>

        <div className="flex">
          <div className="flex contact">
            <div className="flex_33">
              <div data-aos="fade-left" className="flex skills_headDiv">
                <div className="flex items_center">
                  <div className="stright_line_verticle"></div>
                  <h2 className="heading">Contact</h2>
                </div>
              </div>
              <div className="flex_30 contact_data">
                <article className="flex items_center">
                  <img
                    data-aos="fade-right"
                    src="/images/profile.jpeg"
                    alt=""
                  />
                  <nav className="flex justify_center">
                    <ul className="flex_15 flex justify_between icons">
                      <li>
                        <a
                          className="git_linc_twitt"
                          href="https://github.com/Narasimhuluv"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="git_linc_twitt"
                          href="https://www.linkedin.com/in/vasam-narasimhulu-8085901b3/"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="git_linc_twitt"
                          href="https://twitter.com/NarasimhuluV7"
                        >
                          <i className="fab fa-twitter-square"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <a className="resume" href="/" download>
                    Resume
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
