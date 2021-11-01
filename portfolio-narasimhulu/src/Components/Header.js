import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
function Header(props) {
  var { handleDark, isDark, handleDay } = props;
  console.log(isDark);
  return (
    <header>
      <div
        className={
          isDark === false
            ? "container flex justify_between items_center header"
            : "container flex justify_between items_center header header_dark"
        }
      >
        <figure className="flex_15 flex items_center">
          {"<"}
          {isDark === false ? (
            <img
              className="width_full"
              src="/images/black_name.png"
              alt="nameimage"
            />
          ) : (
            <img
              className="width_full"
              src="/images/white_name.png"
              alt="nameimage"
            />
          )}
          {"/>"}
        </figure>

        <nav className="flex_25">
          <ul className="flex justify_between items_center">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#aboutme">About</a>
            </li>
            <li>
              {isDark === false ? (
                <NightsStayOutlinedIcon onClick={handleDark} />
              ) : (
                <WbSunnyIcon onClick={handleDay} />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
