import React from "react";
import Menus from "../menus/Menus";
import Animation from "../WelcomeAnimation/Animation";
import Heading from "../Heading_title/Heading";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { Col, Container, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import {personal_info_card_view,personal_info_list_view,skill_data,edu_exp_data} from '../data.js';
import resume from '../../img/Resume-ujjwal kumar.pdf';
import "./About.css";
const About = ({ themeSwitch }) => {

  const open_pdf = () =>{
    window.open(resume);
  }

  return (
    <div className="about_page">
      <ThemeSwitcher />
      <Menus />

      <Animation themeSwitch={themeSwitch} />

      <motion.div
        className="about_wrapper"
        initial={{ marginTop: "250px" }}
        animate={{ marginTop: "0px" }}
        whileInView={{ margintTop: "0px" }}
        transition={{ duration: 1.2 }}
      >
        <Container fluid>
          <Row className="about_container_row">
            <Col>
              <Container>
                <Row className="text-center">
                  <Col>
                    <Heading word1="About" word2="me" backText="resume" />
                  </Col>
                </Row>

                <Row className="pt-5">
                  <div className="col-lg-6 col-12">
                    <div className="row personal_infos">
                      <div className="col-12 p-0 personal_infos_heading">
                        <h1>Personal Info</h1>
                      </div>
                      <div className="col-lg-12 col-12 p-0 personal_infos_list">
                        <ul className="p-0">
                          {personal_info_list_view.map((val, i) => {
                            return (
                              <li key={i}>
                                <span>{val.label}:</span>
                                <span className="value">
                                  &nbsp;{val.text_value}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                        <button onClick={open_pdf}>
                          <span>download cv</span>
                          <span className="btn_arrow">
                            <FaDownload className="arrow_right" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="container">
                      <div className="row">
                        {personal_info_card_view.map((val, i) => {
                          return (
                            <div key={i} className="col-lg-6 col-md-6 exp_card">
                              <div className="box_stats">
                                <div>
                                  <p>{val.num}</p>
                                </div>
                                <div>
                                  <p>{val.titile}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Row>

                <Row className="skills pb-5">
                  <div className="col-lg-12 text-center ">
                    <div className="skills_head">
                      <h2>my skills</h2>
                    </div>
                  </div>

                  {skill_data.map((val, i) => {
                    return (
                      <div className="col-lg-3 col-md-6 col-6 mt-5">
                        <div className="skills_bar">
                          <CircularProgressbar
                          key={i}
                            value={val.skill_percentage}
                            text={`${val.skill_percentage}%`}
                            strokeWidth={8}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              textSize: "16px",
                              pathColor: `#ffb400`,
                              trailColor: "#252525",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>
                        <div className="skill_title text-center pt-4">
                          <p>{val.skill_titile}</p>
                        </div>
                      </div>
                    );
                  })}
                </Row>

                <Row className="edu_exp mt-5 pt-5">
                  <div className="col-lg-12 text-center ">
                    <div className="edu_exp_head">
                      <h2>experience & education</h2>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12 p-0 edu_exp_list pt-5">
                    <ul className="p-0">
                      {edu_exp_data.reverse().map((val, i) => {
                        return (
                          <li key={i}>
                            <div class="icon">
                              <BsFillBriefcaseFill />
                            </div>
                            <span class="time open-sans-font text-uppercase">
                              {val.edu_exp_year}
                            </span>
                            <h5 class="poppins-font text-uppercase">
                              {val.edu_exp_degree}
                              <span class="place open-sans-font">
                                {val.edu_exp_org}
                              </span>
                            </h5>
                            <p class="open-sans-font">{val.edu_exp_desc}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default About;
