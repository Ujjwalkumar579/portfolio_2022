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
import "./About.css";
const About = () => {
  const personal_info_card_view = [
    {
      num: "01",
      titile: `year of experience`,
    },
    {
      num: "07",
      titile: "completed porjects",
    },
    {
      num: "03",
      titile: "happy customers",
    },
    {
      num: "01",
      titile: "awards won",
    },
  ];

  const personal_info_list_view = [
    {
      label: "first name",
      text_value: "ujjwal",
    },
    {
      label: "last name",
      text_value: "kumar",
    },
    {
      label: "age",
      text_value: "26",
    },
    {
      label: "nationality",
      text_value: "ujjwal",
    },
    {
      label: "freelance",
      text_value: "indian",
    },
    {
      label: "address",
      text_value: "gaya",
    },
    {
      label: "phone",
      text_value: "+919155227703",
    },
    {
      label: "email",
      text_value: "ujjwal",
    },
    {
      label: "skype",
      text_value: "ujjwal.kumar579@gmail.com",
    },
    {
      label: "langages",
      text_value: "english, hindi",
    },
  ];

  const skill_data = [
    {
      skill_percentage: 25,
      skill_titile: "html",
    },
    {
      skill_percentage: 89,
      skill_titile: "javascript",
    },
    {
      skill_percentage: 70,
      skill_titile: "css",
    },
    {
      skill_percentage: 66,
      skill_titile: "bootstrap",
    },
    {
      skill_percentage: 95,
      skill_titile: "wordpress",
    },
    {
      skill_percentage: 50,
      skill_titile: "jquery",
    },
    {
      skill_percentage: 65,
      skill_titile: "react",
    },
    {
      skill_percentage: 35,
      skill_titile: "illustrator",
    },
  ];

  const edu_exp_data = [
    {
      edu_exp_year: "2012",
      edu_exp_degree: "Secondary School ",
      edu_exp_org: "baridih high school, jamshedpur",
      edu_exp_desc: "",
    },
    {
      edu_exp_year: "2015",
      edu_exp_degree: "Higher Secondary ",
      edu_exp_org: "a.m college, gaya",
      edu_exp_desc: "",
    },
    {
      edu_exp_year: "2018",
      edu_exp_degree: "bachelor degree",
      edu_exp_org: "gaya college, gaya",
      edu_exp_desc: "",
    },
    {
      edu_exp_year: "2020",
      edu_exp_degree: "web development Certificate",
      edu_exp_org: "arena animation, ranchi",
      edu_exp_desc: "",
    },
    {
      edu_exp_year: "2021",
      edu_exp_degree: "UI Developer",
      edu_exp_org: "indev consultancy pvt. ltd, delhi",
      edu_exp_desc: "",
    },
    {
      edu_exp_year: "2022 - Present",
      edu_exp_degree: "full stack development",
      edu_exp_org: "newton school",
      edu_exp_desc: "",
    },
  ];

  return (
    <div className="about_page">
      <ThemeSwitcher />
      <Menus />

      <Animation />

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
                        <button>
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
