import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills(props) {
  var { isDark } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container flex justify_center">
      <div className="flex_80">
        <div
          className={
            isDark === false
              ? "flex skills_headDiv"
              : "flex skills_headDiv skills_headDiv_dark"
          }
        >
          <div data-aos="fade-right" className="flex flex_20 items_center">
            <div className="stright_line_verticle"></div>
            <h2 className="heading" id="skills">
              Skills
            </h2>
          </div>
        </div>

        <div className="flex skills justify_center items_center column">
          <figure className="flex_42" data-aos="zoom-in">
            <img className="width_full" src="/images/skills.svg" alt="" />
          </figure>
          <div className="flex flex_42 justify_center items_center">
            <div className="flex justify_center flex_wrap items_center">
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/git.png"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/html.svg"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/css.svg"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/js.svg"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/react.svg"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/redux.svg"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/sass.svg"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/tailwindcss.svg"
                alt=""
              />
              <img
                className={
                  isDark === false
                    ? "skill_image"
                    : "skill_image skill_image_dark"
                }
                src="/images/materialui.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
