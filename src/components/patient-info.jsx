import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import "./style.scss";
import {getFullName} from "../_utils/common-utils";
import {getPatientDetails} from "../patient/patient-details/api";

const PatientInfo = (props) => {
    let [patientInfo, setPatientInfo] = useState(null);
    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;

    useEffect(async () => {
        let patientData = await getPatientDetails(practiceId, patientId)
        setPatientInfo(patientData)
    },[])
    return (
        <div className="patientInfo text-left">
             <Row xs={1} md={1} lg={2}>
                <Col>
                    <div className="patientName">
                        <h6>Patient Name</h6>
                        <h4>{patientInfo&&patientInfo.firstName?getFullName(patientInfo):"-"}</h4>
                        <h5>{patientInfo?patientInfo.gender:"-"}</h5>
                    </div>
                </Col>
                <Col>
                    <Row xs={1} md={3} lg={3}>
                        <Col>
                            <div className="patientName">
                                <h6>Date of Birth</h6>
                                <h3>-</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="patientName">
                                <h6>New ID #</h6>
                                <h3>{patientInfo?patientInfo.patientId:"-"}</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="patientName">
                                <h6>Prior ID #</h6>
                                <h3>-</h3>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default PatientInfo;
