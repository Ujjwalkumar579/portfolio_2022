import React from "react";
import heroImg from "../../assets/portfolio_mobile.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import Menus from "../menus/Menus";
import "./Home.css";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { motion } from "framer-motion";
import Animation from "../WelcomeAnimation/Animation";
const Home = ({ themeSwitch }) => {
  return (
    <div className="home_page">
      {/*--------theme Switch--------*/}
      <ThemeSwitcher />
      {/*-------headers( Menus )-------*/}
      <Menus />
      {/*------Animation component------*/}

      <div className="home_wrapper">
        <Animation themeSwitch={themeSwitch} />
        <div className="conatiner-fluid">
          <div className="yellow_strap_bg d-none d-lg-block d-xl-block"></div>
          <motion.div
            className="row home_container_row d-flex align-items-center"
            initial={{ marginTop: "250px" }}
            animate={{ marginTop: "0px" }}
            whileInView={{ margintTop: "0px" }}
            transition={{ duration: 1.2 }}
          >
            <div className="col-lg-4 img_display">
              <div className="portfolio_display_img"></div>
              <div className="mobile_view_img d-lg-block d-xl-none">
                <img src={heroImg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 text-start">
              <div className="content_display">
                <h1>
                  <span>i'm ujjwal kumar.</span> <span>web developer</span>
                </h1>
                <p>
                  I'm a Tunisian based web designer & front‑end developer
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me.
                </p>
                <button>
                  <span>More about me</span>
                  <span className="btn_arrow">
                    <TiArrowRightThick className="arrow_right" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
