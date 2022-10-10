import React from "react";
import { motion } from "framer-motion";
import "./Animation.css";
const Animation = () => {
  return (
    <motion.div
      className="animation"
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
