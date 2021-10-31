import React from "react";

function Skills(props) {
  var { isDark } = props;
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
          <div className="flex flex_20 items_center">
            <div className="stright_line_verticle"></div>
            <h2 className="heading" id="skills">
              Skills
            </h2>
          </div>
        </div>

        <div className="flex skills justify_center items_center column">
          <figure className="flex_42">
            <img className="width_full" src="/images/skills.svg" alt="" />
          </figure>
          <div className="flex width_full flex_42 justify_center items_center">
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
      {/* <nav className="links_left">
        <ul className="flex desktop_column items_center ">
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
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/NarasimhuluV7">
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          <div className="stright_line"></div>
        </ul>
      </nav> */}

      {/* <div
        className={
          isDark === false
            ? "mail_right flex items_center"
            : "mail_right mail_right_dark flex items_center"
        }
      >
        <a href="https://vasamnarasimhulu123@gmail.com">
          vasamnarasimhulu123@gmail.com
        </a>
        <div className="stright_line_verticle"></div>
      </div> */}
    </section>
  );
}

export default Skills;
