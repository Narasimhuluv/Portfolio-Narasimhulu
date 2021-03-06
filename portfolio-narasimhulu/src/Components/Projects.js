import React, { useEffect } from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects(props) {
  var { isDark } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="projects">
      <div className="container">
        <h2
          id="projects"
          className={isDark === false ? "heading" : "heading dark_heading"}
        >
          Personal Projects
        </h2>

        <div className="flex justify_center items_center flex_wrap projects_parent_div">
          <article
            data-aos="zoom-in"
            className={
              isDark === false
                ? "flex_28 project_article"
                : "flex_28 project_article project_article_dark"
            }
          >
            <div className="flex items_center">
              <div>
                <p className="featured">Featured Project</p>
                <h2>BLOG APP</h2>
              </div>
              <lottie-player
                src="https://assets3.lottiefiles.com/private_files/lf30_dezgszkb.json"
                background="transparent"
                speed="1"
                loop
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className="lottie"
                autoplay
              ></lottie-player>
            </div>
            <div className="project_article_semidiv">
              <p className="summery">
                You’ve read all your free member-only stories, become a member
                to get unlimited access. Your membership fee supports Casey
                Botticello and the voices you want to hear more from.
              </p>
            </div>
            <ul className="flex project_list">
              <li>ReactJs</li>
              <li>Material UI</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>

            <div className="flex icons">
              <ul className="flex_15 flex justify_center ">
                <li>
                  <a
                    href="https://github.com/Narasimhuluv/Blog-Application/tree/main/react-blog-app"
                    target="blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog-application-six.vercel.app/"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article
            data-aos="zoom-in"
            className={
              isDark === false
                ? "flex_28 project_article"
                : "flex_28 project_article project_article_dark"
            }
          >
            <div className="flex items_center">
              <div>
                <p className="featured">Featured Project</p>
                <h2>Conduit Api</h2>
              </div>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_qv9hdeyy.json"
                background="transparent"
                speed="1"
                loop
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className="lottie"
                autoplay
              ></lottie-player>
            </div>
            <div className="project_article_semidiv">
              <p className="summery">
                You’ve read all your free member-only stories, become a member
                to get unlimited access. Your membership fee supports Casey
                Botticello and the voices you want to hear more from.
              </p>
            </div>
            <ul className="flex project_list">
              <li>MongoDB</li>
              <li>Express Js</li>
              <li>Node</li>
            </ul>

            <div className="flex icons">
              <ul className="flex_15 flex justify_center ">
                <li>
                  <a
                    href="https://github.com/Narasimhuluv/TA-AC-BACKEND-JWT-based-authentication-TNaaak/tree/block-BNaaen/block-BNaaen/api_conduit"
                    target="blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article
            data-aos="zoom-in"
            className={
              isDark === false
                ? "flex_28 project_article"
                : "flex_28 project_article project_article_dark"
            }
          >
            <div className="flex items_center">
              <div>
                <p className="featured">Featured Project</p>
                <h2>Github Battle</h2>
              </div>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_aEjRUC.json"
                background="transparent"
                speed="1"
                loop
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className="lottie"
                autoplay
              ></lottie-player>
            </div>
            <div className="project_article_semidiv">
              <p className="summery">
                This project is a "Github Battle" app. You'll be able to see the
                most popular repos for a variety of languages as well as battle
                two Github users
              </p>
            </div>
            <ul className="flex project_list">
              <li>ReactJs</li>
              <li>Material UI</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>

            <div className="flex icons">
              <ul className="flex_15 flex justify_center ">
                <li>
                  <a
                    href="https://github.com/Narasimhuluv/GithubBattle-Using-Hooks/tree/main/github-battle-hooks"
                    target="blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github-battle-using-hooks.vercel.app/"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article
            data-aos="zoom-in"
            className={
              isDark === false
                ? "flex_28 project_article"
                : "flex_28 project_article project_article_dark"
            }
          >
            <div className="flex items_center">
              <div>
                <p className="featured">Featured Project</p>
                <h2>Shopping Cart</h2>
              </div>
              <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_g5eeqvjy.json"
                background="transparent"
                speed="0.5"
                loop
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className="lottie"
                autoplay
              ></lottie-player>
            </div>
            <div className="project_article_semidiv">
              <p className="summery">
                It is a small shopping cart inspired from flipkart, amazon , it
                will display the all list of products and we can filter the
                products size wise and sort the prices, we can add the products
                in cart
              </p>
            </div>
            <ul className="flex project_list">
              <li>ReactJs</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>

            <div className="flex icons">
              <ul className="flex_15 flex justify_center ">
                <li>
                  <a
                    href="https://github.com/Narasimhuluv/Shopping-Cart-Using-Hooks/tree/main/shopping-cart-hooks"
                    target="blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://shopping-cart-using-hooks.vercel.app/"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article
            data-aos="zoom-in"
            className={
              isDark === false
                ? "flex_28 project_article"
                : "flex_28 project_article project_article_dark"
            }
          >
            <div className="flex items_center">
              <div>
                <p className="featured">Featured Project</p>
                <h2>Netflix clone</h2>
              </div>
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_is6flrfu.json"
                background="transparent"
                speed="0.5"
                loop
                style={{
                  width: "100px",
                  height: "100px",
                  // filter: "grayscale(1)",
                }}
                className="lottie"
                autoplay
              ></lottie-player>
            </div>
            <div className="project_article_semidiv">
              <p className="summery">
                Netflix application is streaming service that allows people to
                watch Movies on internet-connected devices
              </p>
            </div>
            <ul className="flex project_list">
              <li>ReactJs</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>

            <div className="flex icons">
              <ul className="flex_15 flex justify_center ">
                <li>
                  <a
                    href="https://github.com/Narasimhuluv/Netflix-Youtube/tree/main/netflix"
                    target="blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://netflix-youtube.vercel.app/" target="blank">
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article
            data-aos="zoom-in"
            className={
              isDark === false
                ? "flex_28 project_article"
                : "flex_28 project_article project_article_dark"
            }
          >
            <div className="flex items_center">
              <div>
                <p className="featured">Featured Project</p>
                <h2>Amazon prime Clone</h2>
              </div>
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_vIu8Dp.json"
                background="transparent"
                speed="0.5"
                loop
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className="lottie"
                autoplay
              ></lottie-player>
            </div>
            <div className="project_article_semidiv">
              <p className="summery">
                Amazon Videos is small application inspired from Amazon
                prime.There is data Fetch by using API and it will take us to
                the Individual movies or series of details when we click on
                specific movie or series.
              </p>
            </div>
            <ul className="flex project_list">
              <li>ReactJs</li>
              <li>TailwindCSS</li>
              <li>CSS</li>
            </ul>

            <div className="flex icons">
              <ul className="flex_15 flex justify_center ">
                <li>
                  <a
                    href="https://github.com/Narasimhuluv/Amazon-videos/tree/main/amazon-video-play"
                    target="blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://amazon-videos.vercel.app/" target="blank">
                    <OpenInNewRoundedIcon />
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
