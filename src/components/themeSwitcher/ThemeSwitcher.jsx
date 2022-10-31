import React, { useContext } from "react";
import { IoMdSunny } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { BsMoonStarsFill } from "react-icons/bs";
import { Mycontext } from "../../App";

const ThemeSwitcher = () => {
  const { themeSwitch, themeChangeHandler } = useContext(Mycontext);
  return (
    <label className="theme_switcher_label" onClick={themeChangeHandler}>
      <div className="switches">
        <IconContext.Provider value={{ size: "18px" }}>
          <span className="light_text">
            {!themeSwitch ? <IoMdSunny className="theme_icon" /> : ""}
          </span>

          <span className="dark-text">
            {themeSwitch && <BsMoonStarsFill className="theme_icon" />}
          </span>
        </IconContext.Provider>
      </div>
    </label>
  );
};

export default ThemeSwitcher;
