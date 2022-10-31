import React, { memo, useContext } from 'react'
import { Mycontext } from '../../../App';
import '../Portfolio.css'
import Modal1 from './Modal1';

const Box_Design = ({ dataForPortoflio }) => {

    const {clickHandler, showData, setModalShow, modalShow} = useContext(Mycontext);
    
    return (
        <div>
            <div className="col-lg-12">
                <div className="container">
                    <div className="row">
                        {dataForPortoflio.filter((ele) => ele.type === "box_design").map((val, i) => {
                            return (
                                <div className="col-lg-4 p-0" key={i} onClick={() => clickHandler(val)}>
                                    <div className="port_card">
                                        <div className="port_thumbnail" data-hover={`${val.hover_text}`}>
                                            <img
                                                src={val.thumbnail}
                                                alt=""
                                                width="100%"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Modal1
                showData={showData}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default memo(Box_Design)
