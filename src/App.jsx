import React, { createContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import { AnimatePresence } from "framer-motion";
export const contextForTheme = createContext();
const App = () => {
  // theme switch state
  const [themeSwitch, setThemeSwitch] = useState(false);

  // const [backToHome, setBackToHome] = useState("");

  //theme change handler
  const themeChangeHandler = () => {
    setThemeSwitch(!themeSwitch);
  };

  // location hook for identify the location where you are
  let location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("load", () => {
      navigate("/");
    });
  }, []);

  return (
    <contextForTheme.Provider
      value={{
        themeSwitch: themeSwitch,
        setThemeSwitch: setThemeSwitch,
        themeChangeHandler: themeChangeHandler,
        location: location,
      }}
    >
      {/* <Cursor /> */}
      <div className={themeSwitch ? "light_theme" : "dark_theme"}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </AnimatePresence>
      </div>
    </contextForTheme.Provider>
  );
};

export default App;
