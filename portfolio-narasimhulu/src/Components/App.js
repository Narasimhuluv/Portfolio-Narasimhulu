import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
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
      {/* <Switch>
        <Route path="/" exact>
          <Hero isDark={isDark} />
        </Route>
        <Route path="/projects" exact>
          <Projects isDark={isDark} />
        </Route>

        <Route path="/skills" exact>
          <Skills isDark={isDark} />
        </Route>

        <Route path="/about" exact>
          <About isDark={isDark} />
        </Route>
      </Switch> */}
      <Hero isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <About isDark={isDark} />
    </div>
  );
}

export default App;
