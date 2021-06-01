import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";

const PatientInfo = () => (
    <div className="patientInfo text-left">
        <Row xs={1} md={1} lg={2}>
            <Col>
                <div className="patientName">
                    <h6>Patient Name</h6>
                    <h4>Walker, Karen A.</h4>
                    <h5>(she/her/hers)</h5>
                </div>
            </Col>
            <Col>
                <Row xs={1} md={3} lg={3}>
                    <Col>
                        <div className="patientName">
                            <h6>Date of Birth</h6>
                            <h3>04/02/1978</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="patientName">
                            <h6>Date of Birth</h6>
                            <h3>1146</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="patientName">
                            <h6>Prior ID #</h6>
                            <h3>8902-33</h3>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
);

export default PatientInfo;
