import React, { memo, useContext } from "react";
import "./Modal1.css";
import { FaUserAlt } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { Mycontext } from "../../../App";
const Modal1 = (props) => {
  // console.log(props);

  const {showData} = useContext(Mycontext);
  // console.log(showData);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="justify-content-center">
          <h1 className="text-center">{showData.title}</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="pro_details">
                  <span>
                    <AiFillProject />
                  </span>
                  <span>
                    Project : <span>{showData.title}</span>
                  </span>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="client_details">
                  <span>
                    <FaUserAlt />
                  </span>
                  <span>
                    Client : <span>{showData.client}</span>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="lang_details">
                  <span>
                    <AiFillProject />
                  </span>
                  <span>
                    Language : <span>{showData.tech_stack}</span>
                  </span>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="preview_details">
                  <span>
                    <FaUserAlt />
                  </span>
                  <span>
                    Preview :{" "}
                    <a href={showData.preview} target="blank">
                      {" "}
                      <span> Click to View </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="project_thumb">
                  <img
                    src={showData.thumbnail}
                    alt=""
                    className="img-fluid"
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default memo(Modal1);
