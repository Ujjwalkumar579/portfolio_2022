import React, { useContext } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { HiHome, HiMailOpen } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import "./Menus.css";
import { Link } from "react-router-dom";
import { Mycontext } from "../../App";

//////////////////////////////////////////////////////////   Component Part ///////////////////////////////////////////////

const Menus = () => {
  const { location } = useContext(Mycontext);

  return (
    <div>
      <div className="header">
        <header>
          <ul className="icon_menu">
            <Link to="/">
              <li
                className={
                  location.pathname === "/" ? "icon_box active" : "icon_box"
                }
                menuname="home"
              >
                <HiHome className="icons" />
              </li>
            </Link>
            <Link to="/about">
              <li
                className={
                  location.pathname === "/about"
                    ? "icon_box active"
                    : "icon_box"
                }
                menuname="about"
              >
                <FaUserAlt className="icons" />
              </li>
            </Link>
            <Link to="/portfolio">
              <li
                className={
                  location.pathname === "/portfolio"
                    ? "icon_box active"
                    : "icon_box"
                }
                menuname="portfolio"
              >
                <BsFillBriefcaseFill className="icons" />
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={
                  location.pathname === "/contact"
                    ? "icon_box active"
                    : "icon_box"
                }
                menuname="contact"
              >
                <HiMailOpen className="icons" />
              </li>
            </Link>
            {/* <Link to="/blog">
              <li
                className={
                  location.pathname === "/blog" ? "icon_box active" : "icon_box"
                }
                menuname="blog"
              >
                <SiGooglechat className="icons" />
              </li>
            </Link> */}
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Menus;
