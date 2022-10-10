import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menus from "../menus/Menus";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Animation from "../WelcomeAnimation/Animation";
import { motion } from "framer-motion";
import "./Portfolio.css";
import Heading from "../Heading_title/Heading";
import { useInView } from "react-intersection-observer";
const Portfolio = () => {
  const [ref, inView] = useInView();
  console.log(ref.current);

  const portfolio_data = [
    {
      thumbnail:
        "https://i.postimg.cc/ZnwR1mrR/F1-Qy-TMQFRt-WOKq-Bk1-i2-Tg-3ed3a16f907a45e98aa6499568522be1-Firefox-Screenshot-2022-10-05-T15-11-57-528-Z.png",
      hover_text: "website",
    },
  ];
  return (
    <div className="portfolio">
      <ThemeSwitcher />
      <Menus />
      <Animation />

      <motion.div
        className="portfolio_wrapper"
        initial={{ marginTop: "250px" }}
        animate={{ marginTop: "0px" }}
        whileInView={{ margintTop: "0px" }}
        transition={{ duration: 1.2 }}
      >
        <Container fluid>
          <Row className="portfolio_container_row">
            <Col>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <Heading word1="my" word2="portfolio" backText="works" />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="tab_wrapper">
                    <div className="col-lg-12 text-center tab_button">
                      <div className="tab_menu">
                        <ul>
                          <li>
                            <button>All</button>
                          </li>
                          <li>
                            <button>Logo</button>
                          </li>
                          <li>
                            <button>Video</button>
                          </li>
                          <li>
                            <button>Graphics design</button>
                          </li>
                          <li>
                            <button>mockup</button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="container">
                        <div className="row">
                          {portfolio_data.map((val, i) => {
                            return (
                              <div className="col-lg-4 bg-primary">
                                <div className="port_card">
                                  <div className="port_thumbnail">
                                    <img
                                      src={val.thumbnail}
                                      alt=""
                                      width="50%"
                                      className="img-fluid"
                                      height="100px"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
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

export default Portfolio;
