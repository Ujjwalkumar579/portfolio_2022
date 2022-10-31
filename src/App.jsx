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

export const Mycontext = createContext();
const App = () => {
  // theme switch state
  const [themeSwitch, setThemeSwitch] = useState(false);

    const [modalShow, setModalShow] = useState(false);
    const [showData, setShowData] = useState({
      hover_text: "",
      thumbnail: "",
      type: "",
    });
    const clickHandler = (val) => {
      setShowData(val);
      setModalShow(true);
    };


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
    <Mycontext.Provider
      value={{
        themeSwitch: themeSwitch,
        setThemeSwitch: setThemeSwitch,
        themeChangeHandler: themeChangeHandler,
        location: location,
        clickHandler : clickHandler,
        modalShow : modalShow,
        setModalShow : setModalShow,
        showData : showData
      }}
    >
      {/* <Cursor /> */}
      <div className={themeSwitch ? "light_theme" : "dark_theme"}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home themeSwitch={themeSwitch} />} />

            <Route path="/about" element={<About themeSwitch={themeSwitch} />} />
            <Route path="/portfolio" element={<Portfolio themeSwitch={themeSwitch} />} />
            <Route path="/contact" element={<Contact themeSwitch={themeSwitch} />} />
            <Route path="/blog" element={<Blog themeSwitch={themeSwitch} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Mycontext.Provider>
  );
};

export default App;
