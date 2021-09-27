import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import "./style.scss";
import {getFormattedDate} from "../_utils/common-utils";
import {getPatientDetails} from "../patient/patient-details/api";
import {addCrumb} from "../_utils/breadcrumb-util";
import {useDispatch} from "react-redux";

const PatientInfo = (props) => {
    let [patientInfo, setPatientInfo] = useState(null);
    let patientId = props.match.params.patientId;
    let practiceId = props.match.params.practiceId;
    let claimId = props.match.params.claimId;
    const dispatch = useDispatch()
    useEffect(async () => {
        let pathname = window.location.pathname.split("details")[0] + "details/demographics"
        let crumb = {
            name: `Patient Detail`,
            link: pathname,
            identifier: "patientContent",
            keepPos: !!claimId
        }
        addCrumb(crumb, dispatch)
        let patientData = await getPatientDetails(practiceId, patientId)
        crumb = {
            name: `Patient Detail-${patientData.patientName} (${patientData.newId || patientData.oldId })`,
            identifier: "patientContent",
            keepPos: !!claimId
        }
        addCrumb(crumb, dispatch, true)
        setPatientInfo(patientData)
    }, [])
    return (
        <div className="patientInfo text-left">
            <Row xs={1} md={1} lg={2}>
                <Col>
                    <div className="patientName">
                        <h6>Patient Name</h6>
                        <h4>{patientInfo ? patientInfo.patientName : "N/A"}</h4>
                        <h5>{patientInfo ? patientInfo.gender : "N/A"}</h5>
                    </div>
                </Col>
                <Col>
                    <Row xs={1} md={3} lg={3}>
                        <Col>
                            <div className="patientName">
                                <h6>Date of Birth</h6>
                                <h3>{patientInfo ? getFormattedDate(patientInfo.dob,1) : "N/A"}</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="patientName">
                                <h6>New ID #</h6>
                                <h3>{patientInfo ? patientInfo.newId : "N/A"}</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="patientName">
                                <h6>Prior ID #</h6>
                                <h3>{patientInfo ? patientInfo.oldId : "N/A"}</h3>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default PatientInfo;
