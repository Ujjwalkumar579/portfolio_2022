import React, { useState } from "react";
import Menus from "../menus/Menus";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Animation from "../WelcomeAnimation/Animation";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { address_data } from "../data.js";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "../Heading_title/Heading";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useRef } from "react";
const Contact = ({ themeSwitch }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    query: "",
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ihd8yzi",
        "template_b8lbefm",
        form.current,
        "j5LK3WCgcr2hoTSmn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      query: "",
    });

  };
  
  // toast("Gotcha !, Get Back to you soon");

  return (
    <div className="contact pb-5 mb-5">
      <ThemeSwitcher />
      <Menus />
      <Animation themeSwitch={themeSwitch} />

      <motion.div
        className="contact_wrapper"
        initial={{ marginTop: "250px" }}
        animate={{ marginTop: "0px" }}
        whileInView={{ margintTop: "0px" }}
        transition={{ duration: 1.2 }}
      >
        <Container fluid>
          {/* <ToastContainer
            position="top-center"
            autoClose={500000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          /> */}
          <Row className="contact_container_row">
            <Col>
              <div className="container-fluid">
                <div className="row mb-5">
                  <div className="col-lg-12">
                    <Heading word1="get in" word2="touch" backtext="contact" />
                  </div>
                </div>

                <div className="row mb-4 p-lg-5 pt-0">
                  <div className="col-lg-4 contact_left">
                    <div className="">
                      <h3>Contact Me</h3>
                      <p>
                        Feel free to get in touch with me. I am always open to
                        discussing new projects, creative ideas or opportunities
                        to be part of your visions.
                      </p>
                      <ul className="address">
                        {address_data.map((val, i) => {
                          const { icon, address_title, address_desc } = val;
                          return (
                            <li key={i}>
                              <div className="">{icon}</div>
                              <div>
                                <p>{address_title}</p>
                                <p> {address_desc}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                      <ul className="social_icons">
                        <li>
                          <a
                            href="https://github.com/Ujjwalkumar579"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <BsGithub />
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://www.linkedin.com/in/ujjwal-kumar-991135129/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLinkedinIn />
                          </a>{" "}
                        </li>

                        <li>
                          <a
                            href="https://leetcode.com/ujjwal_kumar579/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <SiLeetcode />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="contact_form">
                      <div className="container-fluid">
                        <form action="" ref={form} onSubmit={sendEmail}>
                          <div className="row">
                            <div className="col-lg-6">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="YOUR NAME"
                                required
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                value={formData.name}
                              />
                            </div>
                            <div className="col-lg-6">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="YOUR EMAIL"
                                required
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                value={formData.email}
                              />
                            </div>

                            <div className="col-lg-12">
                              <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="form-control"
                                placeholder="YOUR SUBJECT"
                                required
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    subject: e.target.value,
                                  })
                                }
                                value={formData.subject}
                              />
                            </div>

                            <div className="col-lg-12">
                              <textarea
                                name="query"
                                id=""
                                cols="30"
                                rows="10"
                                className="form-control"
                                placeholder="YOUR MESSAGE"
                                required
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    query: e.target.value,
                                  })
                                }
                                value={formData.query}
                              ></textarea>
                            </div>

                            <div className="lg-12 mt-5">
                              <button type="submit">
                                <span>send message</span>
                                <span className="btn_arrow">
                                  <IoIosSend className="arrow_right" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default Contact;
