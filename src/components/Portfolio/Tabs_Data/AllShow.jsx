import React from 'react'
import { memo } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { Mycontext } from '../../../App';
import Modal1 from './Modal1';

const AllShow = ({ dataForPortoflio  }) => {

    const { clickHandler, showData, modalShow, setModalShow } = useContext(Mycontext);
    
   const showData1 = useMemo(() => {
      return showData;
    }, [showData]);

    return (
        <div>
            <div className="col-lg-12">
                <div className="container">
                    <div className="row">
                        {dataForPortoflio.map((val, i) => {
                            return (
                                <div className="col-lg-4 p-0" key={i} onClick={() => clickHandler(val)}>
                                    <div className="port_card" >
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
                showData={showData1}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    )
}

export default memo(AllShow)
