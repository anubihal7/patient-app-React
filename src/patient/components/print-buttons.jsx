import React from "react";
import "../claim-information/style.scss";
import {Col, Row} from "react-bootstrap";

const PrintButton = (props) => {
    let {types}=props
    return (
        <div className="printBlocks">
            <Row xs={1} sm={2} md={3} lg={4}>
                {types?.map((item, index) => {
                    return (<Col>
                        <div className="printBlock">
                            <label>{item.split(',')[0]}</label>
                            <h6>{item.split(',')[1]}</h6>
                        </div>
                    </Col>)
                })}
            </Row>
        </div>
    );
}

export default PrintButton;
