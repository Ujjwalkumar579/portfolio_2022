/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menus from "../menus/Menus";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Animation from "../WelcomeAnimation/Animation";
import { motion } from "framer-motion";
import "./Portfolio.css";
import Heading from "../Heading_title/Heading";
import { dataForPortoflio } from "../data.js";
import AllShow from "./Tabs_Data/AllShow";


// import Sonnet from '../../components/Sonnet';

const Portfolio = ({ themeSwitch }) => {
  // const [modalShow, setModalShow] = useState(false);
  // const [showData, setShowData] = useState({
  //   hover_text: "",
  //   thumbnail: "",
  //   type: "",
  // });
  // const clickHandler = (val) => {
  //   setShowData(val);
  //   setModalShow(true);
  // };

  return (
    <div className="portfolio">
      <ThemeSwitcher />
      <Menus />
      <Animation themeSwitch={themeSwitch} />

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
                    <Heading word1="my" word2="portfolio" backtext="works" />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="tab_wrapper">
                    <div className="col-lg-12 text-center tab_button">
                      <div className="tab_menu">
                        <AllShow
                          dataForPortoflio={dataForPortoflio}
                          // clickHandler={clickHandler}
                          // modalShow={modalShow}
                          // setModalShow={setModalShow}
                          // showData={showData}
                        />

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
