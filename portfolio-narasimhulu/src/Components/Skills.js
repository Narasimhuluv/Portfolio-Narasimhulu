import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills(props) {
  var { isDark } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="skills">
      <div className="container">
        <div
          className={
            isDark === false ? "skills_parent_div" : "skills_parent_dark_div"
          }
        >
          {/* Skills and line */}
          <div data-aos="fade-up" className="flex items_center skill_line">
            <div className="stright_line"></div>
            <h2 className="heading" id="skills">
              Skills
            </h2>
          </div>
          {/* all skills div */}

          <article className="flex items_center justify_center skills_article column">
            <figure className="flex_33 skill_figure" data-aos="zoom-in">
              <img className="width_full" src="/images/skills.svg" alt="" />
            </figure>

            <div
              className={
                isDark === false
                  ? "flex_33 flex justify_center flex_wrap items_center logos_parent_div"
                  : "flex_33 flex justify_center flex_wrap items_center logos_parent_div logos_parent_dark_div"
              }
            >
              <img className="skill_image" src="/images/git.png" alt="" />
              <img className="skill_image" src="/images/html.svg" alt="" />
              <img className="skill_image" src="/images/css.svg" alt="" />
              <img className="skill_image" src="/images/js.svg" alt="" />
              <img className="skill_image" src="/images/react.svg" alt="" />
              <img className="skill_image" src="/images/redux.svg" alt="" />
              <img className="skill_image" src="/images/sass.svg" alt="" />
              <img
                className="skill_image"
                src="/images/tailwindcss.svg"
                alt=""
              />
              <img
                className="skill_image"
                src="/images/materialui.svg"
                alt=""
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
