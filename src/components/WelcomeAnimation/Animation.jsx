import React from "react";
import { motion } from "framer-motion";
import "./Animation.css";
const Animation = ({ themeSwitch }) => {
  return (
    <motion.div
      className="animation"
      style={{
        backgroundColor: themeSwitch ? "rgb(218, 218, 218)" : "#2b2b2b",
      }}
      initial={{ top: "0px" }}
      animate={{
        top: "700px",
        transitionEnd: { display: "none" },
      }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default Animation;
