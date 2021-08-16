import React, {useEffect} from "react";
import {Row, Col} from "react-bootstrap";
import "./style.scss";

const Demographics = (props) => {
    const {patientInfo} = props
    return (
        <div className="Demographics text-left">
            <h5>Demographics</h5>
            <div className="sectionOne">

                <Row xs={1} sm={2} md={4} lg={5}>
                    <Col>
                        <label>Nickname</label>
                        <h6>{patientInfo.nickName}</h6>
                    </Col>
                    <Col>
                        <label>Other Last name</label>
                        <h6>{patientInfo.otherLastName}</h6>
                    </Col>
                    <Col>
                        <label>Social Security Number</label>
                        <h6>{patientInfo.ssn}</h6>
                    </Col>
                    <Col>
                        <label>Current Status</label>
                        <h6>
                            <span className="badge">{patientInfo.status}</span>
                        </h6>
                    </Col>
                    <Col>
                        <label>Gender</label>
                        <h6>{patientInfo.gender}</h6>
                    </Col>
                    <Col>
                        <label>Race</label>
                        <h6>{patientInfo.race}</h6>
                    </Col>
                    <Col>
                        <label>Ethnicity</label>
                        <h6>{patientInfo.ethnicity}</h6>
                    </Col>
                    <Col>
                        <label>Language</label>
                        <h6>{patientInfo.language}</h6>
                    </Col>
                    <Col>
                        <label>Marital Status</label>
                        <h6>{patientInfo.maritalStatus}</h6>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={3} lg={6}>
                    <Col>
                        <label>Address</label>
                        <h6>{patientInfo.address1 + "\n"
                        + (patientInfo.address2 !== "" ? patientInfo.address2 + "\n" : "")
                        + patientInfo.city + ", " + patientInfo.state + " " + patientInfo.postalCode}</h6>
                    </Col>
                    <Col>
                        <label>Email Address</label>
                        <h6>u{patientInfo.email}</h6>
                    </Col>
                    <Col>
                        <label>Home Phone</label>
                        <h6>{patientInfo.homePhone}</h6>
                    </Col>
                    <Col>
                        <label>Work Phone</label>
                        <h6>{patientInfo.workPhone}</h6>
                    </Col>
                    <Col>
                        <label>Cell Phone</label>
                        <h6>{patientInfo.cellPhone}</h6>
                    </Col>
                    <Col>
                        <label>Other Phone</label>
                        <h6>{patientInfo.otherPhone}</h6>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={4} lg={5}>
                    <Col>
                        <label>Preferred Provider</label>
                        <h6>{patientInfo.prefProvider}</h6>
                    </Col>
                    <Col>
                        <label>Referring Provider Name</label>
                        <h6>{patientInfo.referingProvider}</h6>
                    </Col>
                    <Col>
                        <label>Primary Care Physician</label>
                        <h6>{patientInfo.primaryPhysician}</h6>
                    </Col>
                    <Col>
                        <label>Referred source</label>
                        <h6>{patientInfo.referredSource}</h6>
                    </Col>
                    <Col>
                        <label>First contact date</label>
                        <h6>{(new Date(patientInfo.firstContactDate)).toLocaleDateString()}</h6>
                    </Col>
                    <Col>
                        <label>Emergency Contact</label>
                        <h6>{patientInfo.emergencyContact}</h6>
                    </Col>

                    <Col>
                        <label>Emergency contact relation</label>
                        <h6>Spouse</h6>
                    </Col>
                    <Col>
                        <label>Emergency contact Phone</label>
                        <h6>{patientInfo.emergencyContactPh}</h6>
                    </Col>

                </Row>
                <Row xs={1} sm={2} md={3} lg={3}>
                    <Col>
                        <label>Custom Field 1</label>
                        <h6>{patientInfo.custField1}</h6>
                    </Col>
                    <Col>
                        <label>Custom Field 2</label>
                        <h6>{patientInfo.custField2}</h6>
                    </Col>
                    <Col>
                        <label>Custom Field 3</label>
                        <h6>{patientInfo.custField3}</h6>
                    </Col>
                    <Col>
                        <label>Custom Field 4</label>
                        <h6>{patientInfo.custField4}</h6>
                    </Col>
                    <Col>
                        <label>Custom Field 5</label>
                        <h6>{patientInfo.custField5}</h6>
                    </Col>
                    <Col>
                        <label>Custom Field 6</label>
                        <h6>{patientInfo.custField6}</h6>
                    </Col>
                    <Col>
                        <label>Custom Field 7</label>
                        <h6>{patientInfo.custField7}</h6>
                    </Col> <Col>
                    <label>Custom Field 8</label>
                    <h6>{patientInfo.custField8}</h6>
                </Col> <Col>
                    <label>Custom Field 9</label>
                    <h6>{patientInfo.custField9}</h6>
                </Col>
                </Row>
            </div>
        </div>
    );
}

export default Demographics;
