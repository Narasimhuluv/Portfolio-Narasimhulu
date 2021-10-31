import React, { useState } from "react";
import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  var [isDark, setisDark] = useState(false);
  function handleDark() {
    setisDark(true);
  }
  function handleDay() {
    setisDark(false);
  }

  return (
    <div className={isDark === false ? "handle_day_app" : "handle_dark_app"}>
      <Header handleDark={handleDark} isDark={isDark} handleDay={handleDay} />
      <Hero isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <About isDark={isDark} />
    </div>
  );
}

export default App;
