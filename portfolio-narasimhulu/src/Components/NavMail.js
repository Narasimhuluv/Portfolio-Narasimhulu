import React from "react";

function NavMail(props) {
  var { isDark } = props;
  return (
    <div>
      <nav
        className={
          isDark === false ? "links_left" : "links_left inks_left_dark"
        }
      >
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
            <a href="https://www.facebook.com/profile.php?id=100006068237124">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/NarasimhuluV7">
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          <div className="stright_line_verticle"></div>
        </ul>
      </nav>

      <div
        className={
          isDark === false
            ? "mail_right flex items_center"
            : "mail_right mail_right_dark flex items_center"
        }
      >
        <a href="https://vasamnarasimhulu123@gmail.com">
          vasamnarasimhulu123@gmail.com
        </a>
        <div className="stright_line_verticle_mail"></div>
      </div>
    </div>
  );
}

export default NavMail;
